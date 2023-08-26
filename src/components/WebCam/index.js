import React, { useRef, useState } from "react";

// import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {
  ButtonCapture,
  // ButtonCloseCam,
  ContainerItems,
  ContainerWebCam,
  ImageCapture,
  ButtonOpenCam,
  WebcamStyle,
} from "./style";
export const WebCam = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const openCamera = () => {
    setShowCamera(true);
  };

  // const closeCamera = () => {
  //   setCapturedImage(null);
  //   setShowCamera(false);
  // };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }

  };

  return (
    <ContainerItems >
      {!showCamera ? (
        <ButtonOpenCam onClick={openCamera} >
          <AddAPhotoIcon />
        </ButtonOpenCam>
      ) : (
        <ContainerWebCam>
          <WebcamStyle
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <ContainerWebCam>
            <ButtonCapture
              onClick={(() => captureImage())}
         
            >
              Tirar foto
            </ButtonCapture>
            {/* <ButtonCloseCam
              onClick={() => closeCamera()}
              className="close-camera-button"
            >
              <CancelSharpIcon />
            </ButtonCloseCam> */}
          </ContainerWebCam>
          {capturedImage && (
            <ImageCapture
              src={capturedImage}
              alt="Captured"
    
            />
          )}
        </ContainerWebCam>
      )}
    </ContainerItems>
  );
};
