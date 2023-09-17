import React from "react";
import "../styles.css";
import Icon from "./Icon";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import BoltIcon from "@mui/icons-material/Bolt";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

const CardItem = ({
	actions,
	description,
	image,
	matches,
	name,
	onPressLeft,
	onPressRight,
	status,
	variant,
	ecoscore,
}) => {
	// Custom styling
	const fullWidth = window.innerWidth; // Use window.innerWidth for screen width in React
	const imageStyle = {
		borderRadius: "8px",
		width: "700px",
		height: "500px",
		margin: variant ? "0" : "20px",
	};

	const nameStyle = {
		paddingTop: variant ? "10px" : "15px",
		paddingBottom: variant ? "5px" : "7px",
		color: "#363636",
		fontSize: variant ? "15px" : "30px",
	};

	return (
		<Paper
			elevation={4}
			className="containerCardItem"
			sx={{ width: "750px", borderRadius: 5, padding: 4, marginTop: 3 }}
		>
			<div>
				<img src={image} alt="User" style={imageStyle} />
			</div>

			{matches && (
				<div className="matchCardItem">
					<div className="matchCardItemCenter">
						<div className="matchesCardItem">
							<FavoriteIcon style={{color: "white"}}/><span className="changeTextColor">{  matches + "% Match!"}</span>
						</div>
					</div>
				</div>
			)}

			<span style={nameStyle}>{name}</span>

			{description && <span className="descriptionCardItem">{description}</span>}
			{ecoscore && (
                <div className="outerThingLol">
                <div className="centerItem">
                <EnergySavingsLeafIcon style={{ color: "green" }} /> <span>{ecoscore}</span>
                </div>
            </div>
			)}

			{status && (
				<div className="status">
					<div className={status === "Online" ? "online" : "offline"} />
					<span className="statusText">{status}</span>
				</div>
			)}

			<div id="cardItemButtonDiv">
				{actions && (
					<div className="actionsCardItem">
						<button className="cardItemButtons">
							<Avatar className="avatar" style={{ backgroundColor: "rgb(230,230,230)" }}>
								<StarIcon style={{ color: "orange" }} />
							</Avatar>
						</button>

						<button className="cardItemButtons" onClick={onPressLeft}>
							<Avatar
								className="avatar"
								sizes={100}
								style={{ backgroundColor: "rgb(230,230,230)", width: 60, height: 60 }}
							>
								<ClearIcon style={{ color: "red" }} />
							</Avatar>
						</button>

						<button className="cardItemButtons" onClick={onPressRight}>
							<Avatar className="avatar" style={{ backgroundColor: "rgb(230,230,230)", width: 60, height: 60 }}>
								<FavoriteIcon style={{ color: "green" }} />
							</Avatar>
						</button>

						<button className="cardItemButtons">
							<Avatar
								className="avatar"
								sx={{ width: "200", height: "200" }}
								style={{ backgroundColor: "rgb(230,230,230)" }}
							>
								<BoltIcon style={{ color: "#301934" }} />
							</Avatar>
						</button>
					</div>
				)}
			</div>
		</Paper>
	);
};

export default CardItem;
