var express = require('express');
var router = express.Router();

const ProductController = require('../controller/ProductController');
const CategoryController = require('../controller/CategoryController');
const paypal = require('paypal-rest-sdk');
const { upload, uploadToCloudinary } = require('../middleware/CloudinaryUpload');


/** chạy trên web
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/product/  */
router.get('/', async function (req, res, next) {
    let products = await ProductController.get();
    products = products.map((p, index) => {
        const price = p.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        return {
            _id: p._id,
            name: p.name,
            gender: p.gender,
            description: p.description,
            image: p.image,
            color: p.color,
            price: price,
            quantity: p.quantity,
            size: p.size,
            favorite: p.favorite,
            isFutured: p.isFutured,
            categoryId: p.categoryId,
            index: index + 1,
        }
    });
    // res.render('products/san-pham', { sp: products });
    res.status(200).json(products);
    // console.log("🚀 ~ file: product.js:32 ~ products=products.map ~ products:", products)
});

//thêm sản phẩm yêu thích
//http://localhost:3000/product/favorite
router.post(':id/favorite/', async function (req, res, next) {
    try {
        let { id } = req.params;
        await ProductController.favourite(id);
        res.json({ status: true });
        console.log("🚀 ~ file: product.js:74 ~ id:", id);
    } catch (error) {
        res.json({ status: false });
        console.log("🚀 ~ file: product.js:79 ~ error", error);
    }
});


//hiển thị sản phẩm yêu thích vừa thêm
//http://localhost:3000/product/:id/favorite
router.get('/:id/favorite', async function (req, res, next) {
    try {
        let { id } = req.params;
        let product = await ProductController.getOne(id);
        res.json(product);
        console.log("🚀 ~ file: product.js:74 ~ id:", id)
    } catch (error) {
        res.json({ status: false });
        console.log("🚀 ~ file: product.js:79 ~ error", error)
    }
});


/* Hiển thị sản phẩm nổi bật  */
//http://localhost:3000/product/featured/:count
router.get('/featured/:count', async function (req, res, next) {
    let { count } = req.params;
    let featuredProducts = await ProductController.get({ isFeatured: true });
    let products = featuredProducts.slice(0, count);
    products = products.map((p, index) => {
        const price = p.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        return {
            _id: p._id,
            name: p.name,
            gender: p.gender,
            description: p.description,
            image: p.image,
            color: p.color,
            price: price,
            quantity: p.quantity,
            size: p.size,
            favorite: p.favorite,
            isFutured: p.isFutured,
            categoryId: p.categoryId,
            index: index + 1,
        }
    });
    // console.log("🚀 ~ file: product.js:32 ~ products=products.map ~ products:", products)
    res.status(200).json(products);
});

/**
 * xóa sản phẩm
 */
//http://localhost:3000:/product/:id
router.delete('/:id', async function (req, res, next) {
    try {
        let { id } = req.params;
        await ProductController.remove(id);
        console.log("🚀 ~ file: product.js:74 ~ id:", id)
        res.json({ status: true });
    } catch (error) {
        res.json({ status: false });
        console.log("🚀 ~ file: product.js:79 ~ error", error)
    }
});

/**
 * Hiển thị trang chi tiết sản phẩm 
 * http://localhost:3000/product/:id/detail
 */
router.get('/:id/detail', async function (req, res, next) {
    try {
        let { id } = req.params;
        const product = await ProductController.getOne(id);
        let categories = await CategoryController.get();
        categories = categories.map((p, index) => {
            return {
                _id: p._id,
                name: p.name,
                isSelected: p._id.toString() == product.categoryId._id.toString(),
            }
        });
        // res.render('products/chinh-sua', { product, categories });
        res.status(200).json({ product, categories });
        console.log("🚀 ~ file: product.js:32 ~ products=products.map ~ products:", product)
    } catch (error) {
        next(error);
    }
});


/**
 * Hiển thị cập nhật sản phẩm
 * https://localhost:3000/product/:id/detail
 */
router.post('/:id/detail', upload.single('image'), async function (req, res, next) {
    try {
        let { file } = req;
        let { name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId } = req.body;
        let { id } = req.params;
        if (file) {
            const imageUrl = await uploadToCloudinary(file);
            // Lưu đường dẫn imageUrl vào cơ sở dữ liệu
            image = imageUrl;
        }
        await ProductController.update(id, name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId);
        res.redirect('/product');
        console.log(req.body);
        // res.status(200).json(products);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/* GET home page. */
/*Hiển thị trang tạo mới sản phẩm*/
//http://localhost:3000/product/tao-moi
router.get('/tao-moi', async function (req, res, next) {
    let categories = await CategoryController.get();
    categories = categories.map((p, index) => {
        return {
            _id: p._id,
            name: p.name,
        }
    });
    console.log("🚀 ~ file: product.js:32 ~ products=products.map ~ products:", categories)
    res.render('products/tao-moi', { categories });
});

/**
 * Lưu tạo mới sản phẩm
 * http://localhost:3000/product/tao-moi
 */
router.post('/tao-moi', upload.single('image'), async function (req, res, next) {
    try {
        let { file } = req;
        let { name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId } = req.body;
        if (file) {
            const imageUrl = await uploadToCloudinary(file);
            // Lưu đường dẫn imageUrl vào cơ sở dữ liệu
            image = imageUrl;
        }
        await ProductController.create(name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId);
        res.redirect('/product');
        console.log(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;
