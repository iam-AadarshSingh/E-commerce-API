//1. Import Express
import express from 'express';
import productRouter from './src/features/product/product.routes.js';
//2. Create Server
const server = express();

// for all requests related to product, redirect to product routes
server.use("/api/products", productRouter)

//3. Default request handler
server.get('/', (req, res, next) => {
    res.send('Welcome to E-Commerce API');
});
//4. Specify port to listen the request
server.listen(3100, () => {
    console.log("Server is running on 3100");
})