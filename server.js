import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './src/App';
import dotenv from 'dotenv';
import cors from 'cors';
import {page} from "./controllers/pages.controller"

dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cors({
    origin: "https://solocorp-frontend.vercel.app",
    methods: ["GET"],
}));
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use(express.json());

app.get("/api/data/:page", page);

app.get("*", (req, res) => {
    const context = {};
    const appString = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>SSR with React</title>
                <script src="/bundle.js" defer></script>
            </head>
            <body>
                <div id="root">${appString}</div>
            </body>
        </html>
    `);
});

app.listen(Port, () => {
    console.log(`Server is working on port ${Port}`);
    connectToMongoDB(); 
});