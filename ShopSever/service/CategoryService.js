
const categoryModel = require('../model/CategoryModel');

const get = async () => {
    //select *  form categories
    const categories = await categoryModel.find({});
    return categories;

}

module.exports = { get };
