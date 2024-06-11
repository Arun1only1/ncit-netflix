import mongoose from "mongoose";

const dbUserName = "abc";
const dbPassword = "abc1234";
const dbName = "ncit-netflix";
const dbHost = "school.b6qkdnb.mongodb.net";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=School`
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
