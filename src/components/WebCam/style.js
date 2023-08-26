/* CameraCapture.css */
import styled from "styled-components";
import Webcam from "react-webcam";
const ContainerItems = styled.div`
  background-color: #292929;
  border-radius: 8px;
  min-width: 650px;
  display: flex;
  padding: 8px;
  align-items: center;
  /* height: 150px; */
`;

const ContainerWebCam = styled.div`
  display: flex;
  padding: 10px;
  width: 650px;
  justify-content: space-around;
  /* margin: 1rem 0; */
`;
const ButtonCapture = styled.button`
  background-color: #333;
  color: white !important;
  width: 120px !important;
  border: 0.2px solid #4a4646 !important;
  border-radius: 8px;

  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
const ImageCapture = styled.img`
  display: flex;

  max-width: 100%;
`;
const ButtonOpenCam = styled.button`
  background: transparent;
  border: 0.2px solid #4a4646 !important;
  color: #808080 !important;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
`;
const ButtonCloseCam = styled.button`
  background: transparent;
  color: #ff0000 !important;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 30px !important;
  font-size: 1rem;
`;
const WebcamStyle = styled(Webcam)`
  display: flex;
  width: 180px;
`;

export {
  ContainerItems,
  ButtonOpenCam,
  ButtonCloseCam,
  ContainerWebCam,
  ButtonCapture,
  ImageCapture,
  WebcamStyle,
};
