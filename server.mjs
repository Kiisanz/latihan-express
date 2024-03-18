//import library
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import postsRouter from "./config/routes/posts.js";
import cors from "cors";

const app = express();
const port = process.env.APP_PORT;
const url = process.env.APP_URL;

//set body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", postsRouter);

app.listen(port, () => {
  console.log(`Server up and running at ${url}:${port}`);
});
