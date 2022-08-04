const express = require("express");
const router = express.Router();
const { Todo } = require("../models/Schemas.js");

router.get("/todos", (req, res) => {
	console.log("it goes here");
	Todo.find({}, (err, foundTodo) => {
		if (!err) {
			res.end(JSON.stringify(foundTodo));
		} else {
			console.log("there is an error to retrieve data from database");
			console.log(err);
		}
	});
});

module.exports = router;
