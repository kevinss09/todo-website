import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

export default function Modal({ showModal, setShowModal }) {
	const modalRef = useRef();

	const [time, setTime] = useState("");
	console.log(time);

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
				console.log("I pressed");
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<>
			{showModal ? (
				<div
					className="w-screen h-screen fixed flex items-center justify-center bg-black bg-opacity-80 top-0 z-20"
					onClick={closeModal}
					ref={modalRef}
				>
					<div
						className={[
							"w-[400px] h-[650px] shadow-md bg-white text-black relative z-10 rounded-lg px-14 py-16",
							showModal
								? "duration-200 opacity-100 translate-y-0"
								: "duration-200 opacity-0 -translate-y-full",
						].join(" ")}
					>
						<form
							action="/addTodo"
							method="POST"
							id="todoName"
							className="flex flex-col items-center justify-start text-[#141414] w-full h-full"
						>
							<input
								type="text"
								placeholder="Add Title"
								id="newTodo"
								name="newTodo"
								autoFocus
								className="w-full text-2xl text-black outline-none border-b-2 border-solid border-b-gray-600 border-t-2 border-t-transparent focus:border-b-blue-500"
							/>
							<div className="mt-10 flex flex-row w-full">
								<FaClock className="flex items-center justify-center text-blue-500" />
								<TimePicker
									placeholder="Select Time"
									use24Hours
									showSecond={false}
									onChange={(e) => setTime(e.format("HH:mm"))}
									className="ml-6 w-[112px] h-[35px]"
								/>
							</div>
							<input type="hidden" name="time" value={time} />

							<button className="py-3 px-6 bg-[#4d79ff] text-white border-none mt-12 rounded-lg hover:bg-slate-300 hover:text-[#4d79ff] transition-all duration-300">
								Add Todo
							</button>
						</form>
						<MdClose
							className="cursor-pointer absolute top-5 right-5 w-8 h-8 p-0 z-10"
							aria-label="Close modal"
							onClick={() => setShowModal((prev) => !prev)}
						/>
					</div>
				</div>
			) : null}
		</>
	);
}
