//1. importing mongo db
import { MongoClient } from "mongodb";

// connecting from local database
const url = "mongodb://localhost:27017/ecomdb";

let client;
export const connectToMongoDB = () => {
    MongoClient.connect(url)
        .then(clientInstance => {
            client = clientInstance
            console.log("MongoDB is connected");
        })
        .catch(err => {
            console.log(err);
        })
}

export const getDB = () => {
    return client.db();
}

export default connectToMongoDB;