import React, { useState } from "react";
import "./homeStyles.css";
import { WebcamCapture } from "../Webcam/Webcam";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home__webcam-container">
        <WebcamCapture />
      </div>
    </div>
  );
};
export default Home;
