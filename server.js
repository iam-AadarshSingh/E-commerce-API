//1. Import Express
import express from 'express';
//2. Create Server
const server = express();
//3. Default request handler
server.get('/', (req, res, next) => {
    res.send('Welcome to E-Commerce API');
});
//4. Specify port to listen the request
server.listen(3200, () => {
    console.log("Server is running on 3100");
})