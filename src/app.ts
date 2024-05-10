import * as dotenv from 'dotenv';

if(!process.env.NODE_ENV) {
    dotenv.config({path: `.env.production`})
}else {
    dotenv.config({
        path: `.env.${process.env.NODE_ENV}`
    })
}

import express, {Express, Request, Response } from 'express';
import cors from 'cors';

const PROJECT_NAME = String(process.env.PROJECT_NAME);
const BASE_URL = String(process.env.BASE_URL) || "http://127.0.0.1";
const PORT = Number(process.env.PORT);

const app : Express = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.json()); // specifies that the type of json in request body and response body will be JSON
app.use(express.urlencoded({ extended: true })); 


app.get('/status',(req:Request, res : Response) => {
    res.send('Server is up and running')
})

app.listen(PORT, () => {
    console.log(`${PROJECT_NAME} is running on ${BASE_URL}:${PORT}`);
});