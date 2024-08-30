import ProductModel from "./product.model.js";
export default class ProductController {
    getAllProducts(req, res) {
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }
    addProducts(req, res) {
        console.log(req.body);
        console.log("This is post request");
        res.status(200).send("Post Request received")
    }
    rateProducts(req, res) {
    }
    getOneProducts(req, res) {
    }
}