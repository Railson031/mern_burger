import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';

import userRouter from './routes/user.js';
import { connectPassport } from './utils/Provider.js';
import passport from 'passport';

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

connectPassport();

app.use("/api/v1", userRouter);

export default app;