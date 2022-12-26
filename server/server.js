import app from './app.js';
import connectDB from './config/database.js';

connectDB();

app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>")
})

app.listen(process.env.PORT, () =>
  console.log(`🏃Server is working on PORT🏃: ${process.env.PORT}`));
