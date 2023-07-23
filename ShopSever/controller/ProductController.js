

const productService = require('../service/ProductService');

const get = async () => {
    try {
        const products = await productService.get();
        return products;
    } catch (error) {
        console.log(error);
    }
}

const create = async (name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId) => {
    try {
        const product = await productService.create(name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId);
        return product;
    } catch (error) {
        console.log(error);
    }
}


const remove = async (id) => {
    try {
        await productService.remove(id);
        console.log('Product deleted successfully');
    } catch (error) {
        console.log(error);
        console.log('Product deleted failed');
    }
}

const getOne = async (id) => {
    try {
        const product = await productService.getOne(id);
        return product;
    } catch (error) {
        console.log(error);
    }
}

const update = async (id, name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId) => {
    try {
        const product = await productService.update(id, name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId);
        return product;
    } catch (error) {
        console.log(error);
    }
}

const favourite = async (id) => {
    try {
        const product = await productService.favourite(id);
        return product;
    } catch (error) {
        console.log(error);
    }
}


module.exports = { get, create, remove, getOne, update, favourite };