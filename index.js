import express from "express";
import connectDB from "./db.connect.js";
import Movie from "./movie.model.js";

const app = express();

// to make app understand json
app.use(express.json());

// connect db
connectDB();

// apis
// add movie
app.post("/movie/add", async (req, res) => {
  // extract new movie from req body
  const newMovie = req.body;

  // add movie to db
  await Movie.create(newMovie);

  // send res
  return res.status(201).send({ message: "Movie is added successfully." });
});

// ? get all movies
app.get("/movie/list", async (req, res) => {
  const movies = await Movie.find();

  return res.status(200).send({ message: "success", movieList: movies });
});
// network port and server
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
