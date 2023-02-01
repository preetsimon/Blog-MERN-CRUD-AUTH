import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

import Connection from "./database/db.js";
import authRouter  from './routes/auth.js';
import userRouter  from './routes/users.js';
import postRouter from './routes/posts.js'

dotenv.config();

const app = express();

app.use(express.json()); // send any json file/object

app.use('/server/auth', authRouter);
app.use('/server/users', userRouter);
app.use('/server/posts', postRouter);


app.listen('5000', ()=>{
    console.log("server is running")
})


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.PASSWORD;
Connection(USERNAME, PASSWORD);