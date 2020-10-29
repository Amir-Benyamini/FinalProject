const express = require("express");
const app = express();
const api = require("./server/routes/api");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use("/", api);


const uri = "mongodb+srv://omieli:mazi2020@bootcamp-omieli.4xuie.mongodb.net/Final?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {console.log("MongoDB Connected…");})
  .catch((err) => console.log(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});


const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
