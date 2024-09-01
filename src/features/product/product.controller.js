import ProductModel from "./product.model.js";
export default class ProductController {
    getAllProducts(req, res) {
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }

    //Add Product Controller
    addProducts(req, res) {
        const { name, price, sizes } = req.body;
        const newProduct = {
            name,
            price: parseFloat(price),
            sizes: sizes.split(','),
            imageUrl: req.file.filename,
        };
        const createdRecord = ProductModel.add(newProduct);
        res.status(201).send(createdRecord)
    }
    rateProducts(req, res) {
    }
    getOneProducts(req, res) {
    }
}