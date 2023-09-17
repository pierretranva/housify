import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "../../styles.css";
import Message from "../Message.js";
import Demo from "../../data.js";
import "../../vystyle.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';

const Messages = () => {
	return (
		<div className="bg">
			<div className="containerMessages">
				<div>
						<h1 className="title">Messages</h1>
					</div>
					<div className="chatCenterDiv">
						<div>
							<div className="search-bar">
								{/* <input type="text" placeholder={<SearchIcon className="search-icon" />} className="search-input" /> */}
								<TextField
									label="Search"
									variant="filled"
                                    sx={{ borderRadius: '100', width: '100%' }}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<SearchIcon className="search-icon" />
											</InputAdornment>
										),
									}}
								/>
							</div>
							<div>
								{Demo.map((item, index) => (
									// Wrap each message button with a Link component
									<Link
										key={index}
										to={`/chat/${item.id}`} // Specify the target URL with the message's unique identifier
										style={{ textDecoration: "none" }} // Remove underlines from links
									>
										<button className="vy-button">
											<Message image={item.image} name={item.name} lastMessage={item.message} />
										</button>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
		</div>
	);
};

export default Messages;
