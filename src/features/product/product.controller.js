import ProductModel from "./product.model.js";
export default class ProductController {
    getAllProducts(req, res) {
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }
    addProducts(req, res) {
    }
    rateProducts(req, res) {
    }
    getOneProducts(req, res) {
    }
}