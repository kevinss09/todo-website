//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routesHandler);

// Create a DB connection
mongoose
	.connect(process.env.DB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(4000, () => {
	console.log("Server has connected to port 4000");
});
