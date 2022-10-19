import React, { useState } from 'react';
import Webcam from "react-webcam";
import './WebCam.css'

// const WebcamComponent = () => <Webcam />;
let camWidth = 0;
let camHeight = 0;
if(window.innerWidth >= 800){
    camHeight = 200;
}else{
    camHeight = 400;
}
const videoConstraints = {
    width: 200,
    height: camHeight,
    facingMode: "environment"
};

export const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    width={200}
                    height={camHeight}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>
        </div>
    );
};
