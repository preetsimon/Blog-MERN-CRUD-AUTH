import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import authRouter  from './routes/auth.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/server/auth', authRouter);

app.listen('5000', ()=>{
    console.log("server is running")
})


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.PASSWORD;
Connection(USERNAME, PASSWORD);