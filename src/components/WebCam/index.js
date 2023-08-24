import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./CameraCapture.css"; // Importar seu arquivo de estilos CSS

export const WebCam = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const openCamera = () => {
    setShowCamera(true);
  };

  const closeCamera = () => {
    setShowCamera(false);
    setCapturedImage(null);
  };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  return (
    <div className="camera-container">
      <h1>Camera Capture App</h1>
      {!showCamera ? (
        <button onClick={openCamera} className="open-camera-button">
          Open Camera
        </button>
      ) : (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam"
          />
          <div>
            <button onClick={captureImage} className="capture-button">
              Capture Image
            </button>
            <button onClick={closeCamera} className="close-camera-button">
              Close Camera
            </button>
          </div>
          {capturedImage && (
            <img
              src={capturedImage}
              alt="Captured"
              className="captured-image"
            />
          )}
        </div>
      )}
    </div>
  );
};