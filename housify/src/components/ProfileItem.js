import React from "react";
import "../styles.css"; // Import your CSS styles
import "./profileItem.css"
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import { Paper, Typography } from "@mui/material";

const ProfileItem = ({ name, matches, location, id, status, price, description}) => {
let hello = {paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
  },
}
	return (
		<Paper elevation={6}sx={{maxWidth: 350, borderRadius: 5, justifyContent:"center"}} className="profileItemContainer">
			<Paper elevation={1} className="floatingEco">
				<span className="matchesTextProfileItem">
					<EnergySavingsLeafIcon color="green" /> {matches}%Eco
				</span>
			</Paper>
			<div className="profileItemFirst">
				<Typography>{name}</Typography>
				<Typography>{location}</Typography>
			</div>
			<div className="profileItemSecond">
				<div className="info">
					<span className="iconProfile">
                    <EnergySavingsLeafIcon/>
					</span>
					<span className="infoContent">{price}</span>
				</div>

				<div className="info">
					<span className="iconProfile">
                    <EnergySavingsLeafIcon/>
					</span>
					<span className="infoContent">{status}</span>
				</div>

				<div className="info">
					<span className="iconProfile">
                    <EnergySavingsLeafIcon/>
					</span>
					<span className="infoContent">{description}</span>
				</div>
			</div>
		</Paper>
		// <div className="containerProfileItem">
		//   <div className="matchesProfileItem">
		//     <span className="matchesTextProfileItem">
		//       <EnergySavingsLeafIcon color='green'/> {matches}%Eco
		//     </span>
		//   </div>

		//   <span className="name">{name}</span>

		//   <span className="descriptionProfileItem">
		//     {age} - {location}
		//   </span>

		//   <div className="info">
		//     <span className="iconProfile">
		//       <Icon name="user" />
		//     </span>
		//     <span className="infoContent">{info1}</span>
		//   </div>

		//   <div className="info">
		//     <span className="iconProfile">
		//       <Icon name="circle" />
		//     </span>
		//     <span className="infoContent">{info2}</span>
		//   </div>

		//   <div className="info">
		//     <span className="iconProfile">
		//       <Icon name="hashtag" />
		//     </span>
		//     <span className="infoContent">{info3}</span>
		//   </div>

		//   <div className="info">
		//     <span className="iconProfile">
		//       <Icon name="calendar" />
		//     </span>
		//     <span className="infoContent">{info4}</span>
		//   </div>
		// </div>
	);
};

export default ProfileItem;
