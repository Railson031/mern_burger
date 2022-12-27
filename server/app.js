import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import userRoute from './routes/user.js';
import orderRoute from './routes/order.js'
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

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({
  extended: true,
}))

connectPassport();

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

//Using Error Middleware
app.use(errorMiddleware)

export default app;