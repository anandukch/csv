const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const csvRouter = require("./routes/app");
const auth = require("./routes/auth");
const mongoUrl = process.env.MONGO_URL;

const connectDb = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));
connectDb();

app.use("/", auth, csvRouter);

app.listen(3000, function () {
  console.log("server started");
});
