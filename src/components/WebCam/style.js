/* CameraCapture.css */
import styled from "styled-components";
import Webcam from "react-webcam";
const ContainerItems = styled.div`
  background-color: #555555;

  border-radius: .5rem;
  min-width: 40.625rem;
  display: flex;
  padding: .5rem;
  align-items: center;
  /* height: 9.375rem; */
`;

const ContainerWebCam = styled.div`
  display: flex;
  padding: .625rem;
  width: 40.625rem;
  justify-content: space-around;
  /* margin: 16px 0; */
`;
const ButtonCapture = styled.button`
  background-color: green;
  color: white !important;
  width: 7.5rem !important;
  border: .0125rem solid #000 !important;
  box-shadow: 0 0 10px #000;
  border-radius: .5rem;

  cursor: pointer;
  font-size: 16px;

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
  border: .0125rem solid #4a4646 !important;
  color: #808080 !important;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
`;
const ButtonCloseCam = styled.button`
  background: transparent;
  color: #ff0000 !important;
  padding: 8px 16px;
  cursor: pointer;
  width: 1.875rem !important;
  font-size: 16px;
`;
const WebcamStyle = styled(Webcam)`
  display: flex;
  width: 11.25rem;
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
