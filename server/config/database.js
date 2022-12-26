import mongoose from 'mongoose';

const connectDB = () => {
  console.log('Wait connecting to the database...');
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Atlas Connected"))
};

export default connectDB;