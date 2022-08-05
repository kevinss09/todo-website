const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	time: {
		type: String,
		require: true,
	},
});

const Todo = new mongoose.model("Todo", todosSchema);

module.exports = { Todo };
