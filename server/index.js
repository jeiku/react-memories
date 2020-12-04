import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

// starting path inside of posts.js, every route inside of postRoutes will start with /posts
app.use("/posts", postRoutes);

// we will be sending large images, so set limit
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// set up database
// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://jakewest:jakewest123@cluster0.be0gq.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  // if promise is successful, call app.listen and connect to server
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  // if not succesfful, throw error
  .catch((error) => console.log(error.message));

// make sure we dont get warnings in console
mongoose.set("useFindAndModify", false);
