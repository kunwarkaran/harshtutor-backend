import express from 'express';
import cors from 'cors';
import appRouter from './routes/api.routes.js'
import { errorMiddleWare } from './middlerware/error.middleware.js';
import "dotenv/config";
import { apiMiddleWare } from './middlerware/api.middleware.js';
import passport from './config/passport.js'
import connectDB from './config/database.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
//app.use(apiMiddleWare);
app.use('/api',appRouter);
app.use(errorMiddleWare);

await connectDB();

app.listen(3000, () => {
    console.log("BE is running on 3000");
})