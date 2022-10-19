import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./WebCam.css";


export const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const [camHeight, setCamHeight] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);  
  const setDimension =()=>{
    setScreenSize(window.innerWidth);
  }
  // let camHeight = 0;
  const webcamRef = React.useRef(null);
  // if (window.innerWidth >= 900) {
  //   camHeight = 200;
  // } else {
  //   camHeight = 410;
  // }
  let screenWidth = window.innerWidth;
    useEffect(() => {
      window.addEventListener("resize", setDimension);
      console.log(window.innerWidth);
      if (window.innerWidth <= 900) {
        setCamHeight(410);
      } else {
        setCamHeight(200);
      }
     return () => {
       window.removeEventListener("resize", setDimension);
     };
      
    },[screenSize]);

  const videoConstraints = {
    width: 200,
    height: camHeight,
    facingMode: "environment",
  };
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  });

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        {image === "" ? (
          <Webcam
            audio={false}
            width={200}
            height={camHeight}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </div>
      <div>
        {image !== "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="webcam-btn"
          >
            Retake Image
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="webcam-btn"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};
