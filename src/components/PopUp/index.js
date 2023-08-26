import React from "react";

export const PopUp = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <p>Deseja confirmar a ação?</p>
        <button onClick={onCancel}>Não</button>
        <button onClick={onConfirm}>Sim</button>
      </div>
    </div>
  );
};


