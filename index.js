import express from "express";
import connectDB from "./db.connect.js";

const app = express();

// to make app understand json
app.use(express.json());

// connect db
connectDB();

// network port and server
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
