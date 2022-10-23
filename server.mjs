//import library
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import ejs from "ejs";
import ejsLayout from "express-ejs-layouts"
import db from "./config/db/db.js";
import userRoute from "./config/routes/user-route.js"
import registerRoute from "./config/routes/register-route.js"
import cors from "cors"
import jwt from 'jsonwebtoken'



const app = express();
const port = process.env.APP_PORT;
const url = process.env.APP_URL;


//set view engine
app.set("view engine", "ejs");
app.use(ejsLayout)
//set body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

//app.use("/", userRoute)
app.use("/", registerRoute)
app.use("/", userRoute)

app.listen(port, () => {
  console.log(`Server up and running at ${url}:${port}`);
});

