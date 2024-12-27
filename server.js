import express from "express";
import dotenv from "dotenv"
import path from "path";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { page } from "./controllers/pages.controller.js";
import Page from "./model/page.model.js";

dotenv.config()

const app = express()
const Port = process.env.PORT;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use(express.json());

app.get("/data/:page", page);


app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname,"frontend", "dist", "index.html"))
})

app.listen(Port, ()=> {
    console.log(`Server is working on port ${Port}`);
    connectToMongoDB()
})