//definisi library
import express from "express"
import axiosR from "./routes/axios.mjs"
const app = express()

app.use("/", axiosR)
//app listen
const port = 3030
app.listen(port, () => {
  console.log(`Server up and running at http://127.0.0.1:${port}`);
});
