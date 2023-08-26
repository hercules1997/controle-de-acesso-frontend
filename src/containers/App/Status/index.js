/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
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
  return (
    <Container>
      <PopUpStyle isOpen={isPopupOpen} onClose={closePopup} />

      <ContainerList>
        <List>
          <Image>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_93-Y6mBxJ4jBbxM69Pdrgww5apgF2ZVXnw&usqp=CAU" />
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUswedX1gmqd6j5eKSWyhmDjtqj86UqVtnlh-k64nikkm99ujh1kMUOMNxcdT-berJUDU&usqp=CAU" />
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUswedX1gmqd6j5eKSWyhmDjtqj86UqVtnlh-k64nikkm99ujh1kMUOMNxcdT-berJUDU&usqp=CAU" />
          </Image>
          <Description>
            <p>Carlos Antônio</p>
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
