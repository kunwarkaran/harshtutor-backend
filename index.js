import express from 'express';
import cors from 'cors';
import appRouter from './routes/api.routes.js'
import { errorMiddleWare } from './middlerware/error.middleware.js';
import "dotenv/config";
import { apiMiddleWare } from './middlerware/api.middleware.js';
import passport from './config/passport.js'

const app = express();

app.use(cors());

app.use(express.json());
app.use(passport.initialize());
//app.use(apiMiddleWare);
app.use('/api',appRouter);
app.use(errorMiddleWare);

app.listen(3000, () => {
    console.log("BE is running on 3000");
})