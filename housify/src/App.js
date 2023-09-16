import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./components/containers/Home";
import Matches from "./components/containers/Matches";
import MessagesScreen from "./components/containers/Messages";
import ProfileScreen from "./components/containers/Profile";
// import Icon from "./components/Icon";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';


const App = () => {
	const [likedProfiles, setLikedProfiles] = useState([]);


	const handleLike = (profile) => {
		setLikedProfiles((prevLikedProfiles) => [...prevLikedProfiles, profile]);
	};

	return (
		<Router>
			<div>
				<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
					<BottomNavigation
						showLabels
						// value={""}
						// onChange={(event, newValue) => {
						// 	setValue(newValue);
						// }}
					>
						<Link to="/" className="tabLink">
							<BottomNavigationAction label="Explore" icon={<SearchIcon/>} />
						</Link>
						<Link to="/matches" className="tabLink">
							<BottomNavigationAction label="Matches" icon={<FavoriteIcon />} />
						</Link>
						<Link to="/chat" className="tabLink">
							<BottomNavigationAction label="Chat" icon={<SmsIcon />} />
						</Link>
						<Link to="/profile" className="tabLink">
							<BottomNavigationAction label="Profile" icon={<PersonIcon />} />
						</Link>
					</BottomNavigation>
				</Paper>
				<Routes>
					<Route path="/" element={<Home onLike={handleLike} />} />
					<Route path="/matches" element={<Matches likedProfiles={likedProfiles} />} />
					<Route path="/chat" element={<MessagesScreen />} />
					<Route path="/profile" element={<ProfileScreen />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
