import React from "react";
import { ContainerPopUp, CardPopUp, InputStyle } from "./style.js";
export const RegisterVisit = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <ContainerPopUp className="popup">
      <CardPopUp className="popup-content">


        <form>
          <h2>Nova visita</h2>
          <label>
            Local de visita
          </label>
          <InputStyle type="text" placeholder="Ex: Rancho"></InputStyle>
          <div className="visit">
            <span>
              <label className="label_Input">
                Data da visita 
              </label>
              <InputStyle type="date"></InputStyle>
            </span>

            <span>
              <label className="label_Input">
                Data da visita 
              </label>
              <InputStyle type="time"></InputStyle>
            </span>
          </div>
          <button onClick={onCancel}>Fechar</button>
        </form>
      </CardPopUp>
    </ContainerPopUp>
  );
};
