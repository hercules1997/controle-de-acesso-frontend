/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import avatar1 from "../../../assets/avatar1.jpg";
import avatar2 from "../../../assets/avatar2.jpg";
import avatar3 from "../../../assets/avatar3.jpg";

import {
  ButtonFinaly,
  Container,
  ContainerList,
  Date,
  Description,
  Image,
  List,
  PopUpStyle,
} from "./style";

export function Status() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirm = () => {
    // Lógica a ser executada quando o usuário confirma
    console.log("Ação confirmada!");
    closePopup(); // Feche o pop-up após a confirmação
  };

  const handleCancel = () => {
    // Lógica a ser executada quando o usuário cancela
    console.log("Ação cancelada!");
    closePopup(); // Feche o pop-up após o cancelamento
  };
  return (
    <Container>
      <PopUpStyle
        isOpen={isPopupOpen}
        onClose={closePopup}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <ContainerList>
        <List>
          <Image>
            <img src={avatar1} />
          </Image>
          <Description>Reginalda Pereira</Description>
          <Date>
            <p>Seg 22 - 13:30h</p>
          </Date>
          <ButtonFinaly>
            <button>Finalizar visita</button>
          </ButtonFinaly>
        </List>
      </ContainerList>
      <ContainerList>
        <List>
          <Image>
            <img src={avatar2} />
          </Image>
          <Description>
            <p>Carlos Antônio</p>
          </Description>
          <Date>
            <p>Seg 22 - 13:30h</p>
          </Date>
          <ButtonFinaly>
            <button>Finalizar visita</button>
          </ButtonFinaly>
        </List>
      </ContainerList>
      <ContainerList>
        <List>
          <Image>
            <img src={avatar3} />
          </Image>
          <Description>
            <p>Júlia Antônio</p>
          </Description>
          <Date>
            <p>Seg 22 - 13:30h</p>
          </Date>
          <ButtonFinaly>
            <button onClick={openPopup}>Finalizar visita</button>
          </ButtonFinaly>
        </List>
      </ContainerList>
    </Container>
  );
}
