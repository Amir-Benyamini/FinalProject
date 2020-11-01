const express = require("express");
const app = express();
const api = require("./server/routes/api");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')

const uri = "mongodb+srv://omieli:mazi2020@bootcamp-omieli.4xuie.mongodb.net/Final?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {console.log("MongoDB Connected…");})
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
/*app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});*/

app.use("/", api);

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
