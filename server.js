import express from "express";
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { page } from "./controllers/pages.controller.js";

dotenv.config()

const app = express()
const Port = process.env.PORT;

app.use(express.json());

app.get("/data/:page", page);

app.listen(Port, ()=> {
    console.log(`Server is working on port ${Port}`);
    connectToMongoDB()
})