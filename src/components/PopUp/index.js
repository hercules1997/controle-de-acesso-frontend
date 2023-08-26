/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import logo from "../../assets/logo.png";
export const PopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose}>Fechar</button>
        {/* Conteúdo do pop-up */}
        <p>asdfadsfasdfasdfasdf</p>
        <img src={logo} />
      </div>
    </div>
  );
};
