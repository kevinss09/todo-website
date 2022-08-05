import "./assets/css/app.css";
import React, { useState, useEffect, useRef } from "react";
import { getDate, getDay, getYear } from "./Date.js";
import Modal from "./components/Modal";

function App() {
	const [items, setItems] = useState([]);
	const [date, setDate] = useState("");
	const [day, setDay] = useState("");
	const [year, setYear] = useState("");
	const clickForm = useRef(null);

	const handleSubmit = () => {
		{
			clickForm.current.submit();
		}
	};

	// this is for the toggle effect
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	useEffect(() => {
		fetchItems();
		setDate(getDate);
		setDay(getDay);
		setYear(getYear);
	}, []);

	const fetchItems = async () => {
		console.log("it goes here");
		const data = await fetch("/todos", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		const items = await data.json();
		setItems(items);
	};

	console.log(items);
	console.log(date);
	console.log(day);

	return (
		<>
			<Modal showModal={showModal} setShowModal={setShowModal} />
			<div className="box max-w-md md:mb-14 md:mt-28 mx-auto border rounded-lg shadow-lg bg-white relative">
				<div className="top h-28 flex w-full flex-row relative border-b-2 border-b-gray-200">
					<div className="top-left flex justify-center w-2/3 h-full flex-col pl-9">
						<h5 className="text-xl text-gray-600">
							<span className="font-bold">{day}, </span>
							{date}
						</h5>
						<h5 className="mt-1 text-[#4d79ff] font-semibold">{year}</h5>
					</div>
					<div className="top-right flex items-center w-1/3 h-full">
						<button
							className="absolute right-8 -bottom-7 bg-orange-500 border rounded-full w-16 h-16 flex items-center justify-center"
							onClick={openModal}
						>
							<h1 className="text-white text-4xl pb-1">+</h1>
						</button>
					</div>
				</div>
				{items.map((item, index) => {
					return (
						<form action="/delete" method="post" ref={clickForm}>
							<div
								className=" todo h-24 flex w-full flex-row relative items-center justify-between border-b-2 border-b-gray-200"
								key={index}
							>
								<div className="flex flex-row relative items-center justify-center pl-9">
									<input
										type="checkbox"
										name="checkbox"
										onChange={handleSubmit}
									/>
									<p className="ml-4 text-xl text-gray-600 font-bold">
										{item.name}
									</p>
								</div>
								<input type="hidden" name="id" value={item._id} />
								<div className="pr-7">
									<h5 className="text-sm opacity-60">{item.time}</h5>
								</div>
							</div>
						</form>
					);
				})}
			</div>
		</>
	);
}

export default App;
