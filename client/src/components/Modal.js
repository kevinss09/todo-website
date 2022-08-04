import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";

export default function Modal({ showModal, setShowModal }) {
	const modalRef = useRef();

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
							"w-[800px] h-[500px] shadow-md bg-white text-black relative z-10 rounded-lg",
							showModal
								? "duration-200 opacity-100 translate-y-0"
								: "duration-200 opacity-0 -translate-y-full",
						].join(" ")}
					>
						<div className="flex flex-col items-center justify-center text-[#141414]">
							<h1>Are you ready?</h1>
							<p className="mb-1">
								This is a text of exclusive access to our next launch
							</p>
							<button className="py-3 px-6 bg-[#141414] text-white border-none">
								Join Now
							</button>
						</div>
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
