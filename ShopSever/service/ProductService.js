
const productModel = require('../model/ProductModel');

const get = async () => {
    //select * form products
    const products = await productModel.find({}).populate('categoryId', '_id name');
    return products;
}


const getOne = async (id) => {
    //select * from products where id = id
    const product = await productModel.findById(id).populate('categoryId', '_id name'); //Object
    return product;
}

const create = async (name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId) => {
    //insert into products (name, price, image, description, category_id) 
    //values (name, price, image, description, category_id)
    const model = new productModel({ name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId });
    await model.save();
    return model;
}

const update = async (id, name, gender, description, image, color, price, quantity, size, favorite, isFutured, categoryId) => {
    //update products set name = name, price = price, image = image, description = description categoryId
    //where id = id
    const product = await productModel.findById(id);
    const model = await productModel.findByIdAndUpdate(id,
        { name, gender, description, image: image ? image : product.image, color, price, quantity, size, favorite, isFutured, categoryId });
    return model;
}

const remove = async (id) => {
    //delete from products where id = id
    await productModel.deleteOne({ _id: id });
}

const favourite = async (id) => {
    //update products set favorite = 1 where id = id
    const model = await productModel.findByIdAndUpdate(id, { favorite: 1 });
    return model;
}




module.exports = { get, create, remove, getOne, update, favourite };