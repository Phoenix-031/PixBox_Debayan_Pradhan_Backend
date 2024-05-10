import * as dotenv from 'dotenv';

if(!process.env.NODE_ENV) {
    dotenv.config({path: `.env.production`})
}else {
    dotenv.config({
        path: `.env.${process.env.NODE_ENV}`
    })
}

import express, { Request, Response } from 'express';
import cors from 'cors';
import mainRouter from './routes/main.route';
import { ErrorHandler } from './utils/error.handler';
import { GenerateResponse } from './utils/response.creator';

const PROJECT_NAME = String(process.env.PROJECT_NAME);
const BASE_URL = String(process.env.BASE_URL) || "http://127.0.0.1";
const PORT = Number(process.env.PORT);

const app : express.Application = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use("/api/v1/main", mainRouter);

app.use('*', (req:Request, res : Response) => {
    GenerateResponse(res, 404);
});

app.use(ErrorHandler);

app.get('/status',(req:Request, res : Response) => {
    res.send('Server is up and running')
})

app.listen(PORT, () => {
    console.log(`${PROJECT_NAME} is running on ${BASE_URL}:${PORT}`);
});