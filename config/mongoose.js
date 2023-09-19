// mongoose.js
import mongoose from "mongoose";

const uri =
  "mongodb+srv://ahasanh303:habib96@class8.i5fm3pr.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB connection URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
