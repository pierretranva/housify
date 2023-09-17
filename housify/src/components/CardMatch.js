import React from "react";
import "../styles.css";
import Icon from "./Icon";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import BoltIcon from "@mui/icons-material/Bolt";

const CardItem = ({ actions, description, image, matches, name, onPressLeft, onPressRight, status, variant }) => {
	// Custom styling
	const fullWidth = window.innerWidth; // Use window.innerWidth for screen width in React
	const imageStyle = {
		borderRadius: "8px",
		width: "250px",
		height: "190px",
		// margin: variant ? "0" : "20px",
	};

	const nameStyle = {
		paddingTop: variant ? "10px" : "15px",
		paddingBottom: variant ? "5px" : "7px",
		color: "#363636",
		fontSize: variant ? "15px" : "30px",
	};

	return (
		<Paper elevation={4} className="containerCardItem" sx={{ width: "250px",height: "250px", borderRadius: 5, padding: 4, marginTop: 3 }}>
			<div>
				<img src={image} alt="User" style={imageStyle} />
			</div>

			{/* {matches && (
        <div className="matchesCardItem">
          <span className="matchesTextCardItem">
            <Icon name="heart" /> {matches}% Match!
          </span>
        </div>
      )} */}

			<span style={nameStyle}>{name}</span>

			{description && <span className="descriptionCardItem">{description}</span>}

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
							<Avatar style={{ backgroundColor: "rgb(230,230,230)" }}>
								<StarIcon style={{ color: "orange" }} />
							</Avatar>
						</button>

						<button className="cardItemButtons" onClick={onPressLeft}>
							<Avatar sizes={100} style={{ backgroundColor: "rgb(230,230,230)", width: 60, height: 60 }}>
                                <ClearIcon style={{ color: "red" }} />
							</Avatar>
						</button>

						<button className="cardItemButtons" onClick={onPressRight}>
							<Avatar style={{ backgroundColor: "rgb(230,230,230)", width: 60, height: 60 }}>
                            <FavoriteIcon style={{ color: "green" }} />
							</Avatar>
						</button>

						<button className="cardItemButtons">
							<Avatar sx={{ width: "200", height: "200" }} style={{ backgroundColor: "rgb(230,230,230)" }}>
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
