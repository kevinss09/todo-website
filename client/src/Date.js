exports.getDate = function () {
	var arrayOfWeekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const today = new Date();
	// var currentDay = today.getDay()
	// var dayName = arrayOfWeekdays[currentDay];
	// // var day = ""

	const options = {
		day: "numeric",
		month: "long",
	};

	return today.toLocaleDateString("en-us", options);
};

exports.getDay = function () {
	var arrayOfWeekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const today = new Date();
	// var currentDay = today.getDay()
	// var dayName = arrayOfWeekdays[currentDay];
	// // var day = ""

	const options = {
		weekday: "long",
	};

	return today.toLocaleDateString("en-us", options);
};

exports.getYear = function () {
	var arrayOfWeekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const today = new Date();
	// var currentDay = today.getDay()
	// var dayName = arrayOfWeekdays[currentDay];
	// // var day = ""

	const options = {
		year: "numeric",
	};

	return today.toLocaleDateString("en-us", options);
};
