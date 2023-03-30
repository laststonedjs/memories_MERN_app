import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// routes
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// middleware
app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb+srv://filip_sarovic:Albertobalsam101@cluster0.sunudnx.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// mongoose
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch((error) => console.log(error.message));
