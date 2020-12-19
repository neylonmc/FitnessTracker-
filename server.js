const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//Connect to port 8080
const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Connect to mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//API and HTML Routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//Listing to port 8080
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
