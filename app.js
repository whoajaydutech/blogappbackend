const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes.js");
import "./serverawake.js"

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded images
app.use("/api/blogs", blogRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = app;
