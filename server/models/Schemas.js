const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	Date: {
		type: Date,
		default: Date.now,
	},
});

const Todo = new mongoose.model("Todo", todosSchema);

module.exports = { Todo };
