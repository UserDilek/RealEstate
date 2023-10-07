import express from "express";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:admin@mere-estate.iaizvpx.mongodb.net/mern-estate?retryWrites=true&w=majority"
);

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
