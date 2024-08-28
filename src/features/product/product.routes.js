import ProductController from './product.controller.js';
// Manages rotes/paths to ProductController

//1. Import express
import express, { Router } from 'express';

//2. Initialize express router
const productRouter = express.Router(); //Router is a method here

//All the paths to controller methods.
const productController = new ProductController();
productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.addProducts);

export default productRouter;