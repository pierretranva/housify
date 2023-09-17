import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./components/containers/Home";
import Matches from "./components/containers/Matches";
import MessagesScreen from "./components/containers/Messages";
import ProfileScreen from "./components/containers/Profile";
// import Icon from "./components/Icon";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsIcon from "@mui/icons-material/Sms";
import PersonIcon from "@mui/icons-material/Person";
import ChatScreen from './components/ChatScreen'; // Import the ChatScreen component



const App = () => {
	const [likedProfiles, setLikedProfiles] = useState([]);
	const [value, setValue] = useState("Explore")
	// const [toggleTab, setToggleTab] = useState({ explore: "green", matches: "", chat: "", profile: "" });

	const handleLike = (profile) => {
		setLikedProfiles((prevLikedProfiles) => [...prevLikedProfiles, profile]);
	};
	// const updateTab= (newValue) => {
	//     let temp = toggleTab;
	//     for (let key in temp) {
	//         if (key == newValue) {
	//             temp[key] = "green";
	//         } else {
	//             temp[key] = "";
	//         }
	//     }
	//     setToggleTab(temp);

	// }
	return (
		<Router>
			<div id="main">
				<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={4}>
					<BottomNavigation

						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					>
						<Link to="/" className="tabLink">
							<BottomNavigationAction sx={{ m: 1 }} showLabel={true} label="Explore" icon={<SearchIcon />} />
						</Link>
						<Link to="/matches" className="tabLink">
							<BottomNavigationAction sx={{ m: 1 }} showLabel={true} label="Matches" icon={<FavoriteIcon />} />
						</Link>
						<Link to="/chat" className="tabLink">
							<BottomNavigationAction sx={{ m: 1 }} showLabel={true} label="Chat" icon={<SmsIcon />} />
						</Link>
						<Link to="/profile" className="tabLink">
							<BottomNavigationAction sx={{ m: 1 }} showLabel={true} label="Profile" icon={<PersonIcon />} />
						</Link>
					</BottomNavigation>
				</Paper>
				<Routes>
					<Route path="/" element={<Home onLike={handleLike} />} />
					<Route path="/matches" element={<Matches likedProfiles={likedProfiles} />} />
					<Route path="/chat" element={<MessagesScreen />} />
					<Route path="/profile" element={<ProfileScreen />} />
						<Route path="/chat/:chatId" element={<ChatScreen />} />
					</Routes>

			</div>
		</Router>
	);
};

export default App;
