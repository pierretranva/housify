import React, { useState, useEffect } from "react";
import { pink } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import "./ChatScreen.css";

function ChatScreen() {
	const { chatId } = useParams();
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [messageSender, setMessageSender] = useState("You");

	useEffect(() => {
		console.log(messages);
	}, [messages]);

	const handleSend = (e) => {
		e.preventDefault();

		// Create a new message object based on user input
		const newMessage = { sender: "You", message: input, images: [] }; // Use an array to store multiple images

		// Check for specific prompts and provide responses based on chat ID
		let response = null;

		if (input.toLowerCase() === "send pics?") {
			if (chatId === "1") {
				response = {
					sender: "ChatBot",
					message: "Sure!",
					images: [
						require("../images/Interior/01.i.png"),
						require("../images/Interior/01.o.png"),
						require("../images/Interior/01.q.png"),
					],
				};
			} else if (chatId === "2") {
				response = {
					sender: "ChatBot",
					message: "Yes OFC!",
				};
			}
			// Add similar conditions for other chat IDs...
		}
		if (input.toLowerCase() === "eco score?") {
			if (chatId === "1") {
				response = { sender: "ChatBot", message: "No!" };
			} else if (chatId === "2") {
				response = { sender: "ChatBot", message: "Yes OFC!" };
			}
			// Add similar conditions for other chat IDs...
		}

		// Add the new message to the chat's messages
		const updatedMessages = [...messages, newMessage];

		// If there's a response, add it to the messages immediately
		if (response) {
			updatedMessages.push(response);
		}

		// Clear the input after handling
		setInput("");

		// Update the messages state with the new input
		setMessages(updatedMessages);
	};

	return (
		<div className="chatScreen">
			<p className="chatScreen__timestamp">YOU MATCHED ON 07/11/2020</p>
			<p>Chat ID: {chatId}</p>
			<div className="chatScreen__messages">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`chatScreen__message ${
							message.sender === "You" ? "chatScreen__messageUser" : ""
						}`}
					>
						{message.sender !== "You" && <div className="chatScreen__avatar" />}
						{message.images && message.images.length > 0 ? (
							<div className="chatScreen__imageContainer">
								{message.images.map((image, imageIndex) => (
									<img
										key={imageIndex}
										src={image}
										alt={`Sent Image ${imageIndex}`}
										className="chatScreen__image"
										width={400}
										height={400}
									/>
								))}
							</div>
						) : (
							<p
								className={`chatScreen__paragraph ${
									message.sender === "You" ? "chatScreen__paragraphUser" : ""
								}`}
							>
								{message.message}
							</p>
						)}
					</div>
				))}
			</div>
			<form className="chatScreen__input">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="chatScreen__inputField"
					placeholder="Type a Message...."
					type="text"
				/>
				<button
					onClick={handleSend}
					variant="contained"
					style={{ backgroundColor: pink }}
				>
					SEND
				</button>
			</form>
		</div>
	);
}

export default ChatScreen;
