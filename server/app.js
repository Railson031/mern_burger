import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import userRouter from './routes/user.js';
import { connectPassport } from './utils/Provider.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';


const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
})
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

connectPassport();

app.use("/api/v1", userRouter);

//Using Errir Middleware
app.use(errorMiddleware)

export default app;