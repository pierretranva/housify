import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import City from "../City";
import Filters from "../Filters";
import CardItem from "../CardItem";
import "../../styles.css";
import Demo from "../../data.js";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import housify from "../../images/housify.png";
import Avatar from "@mui/material/Avatar";
import pfp from "../../images/pfp.jpg";

const Home = () => {
  const [stack, setStack] = useState(Demo);
  const [swiped, setSwiped] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState("");
  const [showMatchedMessage, setShowMatchedMessage] = useState(false);

  // Track card position and swipe gesture
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Rotation based on swipe distance
  const rotate = useTransform(cardX, [-300, 0, 300], [-50, 0, 50]);
  const opacity = useTransform(cardX, [-300, 0, 300], [0, 1, 0]);

  useEffect(() => {
    if (stack.length === 0) {
      setStack(Demo);
    }
  }, [stack]);

  const onSwipe = (direction) => {
    // You can add logic here to handle matching or disliking
    if (direction === "right") {
      // Handle matching (e.g., add logic to record a match)
      setShowMatchedMessage(true);
      console.log("Hello")

      // Hide the popup after 2 seconds
      setTimeout(() => {
        setShowMatchedMessage(false);
      }, 2000);
    } else if (direction === "left") {
        setShowMatchedMessage(false);
      // Handle disliking (e.g., add logic to record a dislike)
    }

    // Remove the top card from the stack
    setStack((prevStack) => prevStack.slice(1));

    // Record swipe direction
    setSwipeDirection(direction);

    // Start animation
    setSwiped(true);
  };

  const handleMatch = () => {
    // Simulate a right swipe (match) when clicking the heart button
    onSwipe("right");
  };

  const handleDislike = () => {
    // Simulate a left swipe (dislike) when clicking the dislike button
    onSwipe("left");
  };

  return (
    <div className="main">
      <div className="top">
        <div className="leftTop">
          <City className="topItem" />
          <Filters className="topItem" />
        </div>
        <img className="middleTop" src={housify} height="100px" />
        <div className="rightTop">
          <TextField
            className="homeTextField topItem"
            label="Search"
            variant="filled"
            sx={{ borderRadius: "5px", width: "100%", marginLeft: "auto" }}
            InputProps={{
              startAdornment: (
                <InputAdornment className="homeTextField" position="start">
                  <SearchIcon className="search-icon" />
                </InputAdornment>
              ),
            }}
          />
          <Avatar sx={{ marginTop: ".5rem" }} className="topItem">
            <img src={pfp} height="50px" width="50px" />
          </Avatar>
        </div>
      </div>
      <div className="smallerMain">
        <div className="containerHome">
          <AnimatePresence>
            {stack.length > 0 && (
              <motion.div
                key={stack[0].id}
                className="card"
                style={{
                  x: cardX,
                  y: cardY,
                  rotate,
                  opacity,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(event, info) => {
                  if (Math.abs(info.point.x) > 100) {
                    const direction = info.point.x > 1000 ? "right" : "left";

                    onSwipe(direction);
                  } else {
                    cardX.set(0);
                    cardY.set(0);
                  }
                }}
                transition={{ duration: 0.2 }}
              >
                <div id="CardItemHolder">
                  <CardItem
                    image={stack[0].image}
                    name={stack[0].name}
                    description={stack[0].description}
                    matches={stack[0].match}
                    variant={true}
                    onPressRight={handleMatch}
                    onPressLeft={handleDislike}
                    ecoscore={stack[0].eco}
                    actions
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {showMatchedMessage && (swipeDirection === "right") && (
            <motion.div
              className="matched-popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
            >
              <strong style={{ color: "green", fontWeight: "bold" }}>
                You Matched!
              </strong>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
