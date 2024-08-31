import ProductModel from "./product.model.js";
export default class ProductController {
    getAllProducts(req, res) {
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }
    addProducts(req, res) {
        const { name, price, sizes } = req.body;
        const newProduct = {
            name,
            price: parseFloat(price),
            sizes: sizes.split(','),
            imageUrl: req.file.filename,
        };
        const createdrecord = ProductModel.add(newProduct);
        res.status(201).send(createdrecord)
    }
    rateProducts(req, res) {
    }
    getOneProducts(req, res) {
    }
}