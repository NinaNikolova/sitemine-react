import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import siteRouter from './routers/site.router.js';
import userRouter from "./routers/user.router.js";

import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
}));

app.use('/api/sites', siteRouter);
app.use('/api/users', userRouter);
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Listening on port' + PORT);
})