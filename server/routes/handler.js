const express = require("express");
const router = express.Router();
const { Todo } = require("../models/Schemas.js");

router.get("/todos", (req, res) => {
	// console.log("it goes here");
	Todo.find({}, (err, foundTodo) => {
		if (!err) {
			res.end(JSON.stringify(foundTodo));
		} else {
			console.log("there is an error to retrieve data from database");
			console.log(err);
		}
	});
});

router.post("/addTodo", async (req, res) => {
	console.log("TRII");
	const todo = new Todo({
		name: req.body.newTodo,
		time: req.body.time,
	});

	try {
		await todo.save((err, newTodo) => {
			if (err) {
				console.log(err);
				res.end("Cannot save the new todo to the database");
			} else {
				res.redirect("/");
				res.end();
			}
		});
	} catch {
		console.log("err");
		res.redirect("/");
		res.end();
	}
});

router.post("/delete", (req, res) => {
	console.log("LOLOLO");
	const id = req.body.id;

	Todo.findByIdAndRemove(id, (err, removed) => {
		if (err) {
			console.log(err);
		} else {
			console.log("sucesfully remove" + removed);
			res.redirect("/");
		}
	});
});

module.exports = router;
