/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import {
  ButtonFinaly,
  CardContainer,
  CardHistory,
  CardListPeople,
  Container,
  ContainerList,
  Date,
  Description,
  Image,
  InforList,
  LabelList,
  List,
  StyledBox,
} from "./style";

export function ListPeopleRegister() {
  const [isOpen, setIsOpen] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const rotateComponent = () => {
    setRotationAngle(rotationAngle + 180);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    rotateComponent();
    toggleVisibility();
  };
  return (
    <>
      <Container>
        <ContainerList>
          <List>
            <Image>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_93-Y6mBxJ4jBbxM69Pdrgww5apgF2ZVXnw&usqp=CAU" />
            </Image>
            <Description>
              <p>Carlos Antônio de Abreu</p>
            </Description>
            <Date>
              <p>Última visita - 18 de junho de 2022</p>
            </Date>
            <ButtonFinaly>
              <button>
                <KeyboardDoubleArrowDownSharpIcon />
              </button>
            </ButtonFinaly>
          </List>
        </ContainerList>
        <ContainerList>
          <List>
            <Image>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUswedX1gmqd6j5eKSWyhmDjtqj86UqVtnlh-k64nikkm99ujh1kMUOMNxcdT-berJUDU&usqp=CAU" />
            </Image>
            <Description>
              <p>Júlia Massaratti Tomaski</p>
            </Description>
            <Date>
              <p>Última visita - 12 de maio de 2023</p>
            </Date>
            <ButtonFinaly>
              <button>
                <KeyboardDoubleArrowDownSharpIcon />
              </button>
            </ButtonFinaly>
          </List>
        </ContainerList>
        <ContainerList>
          <List>
            <Image>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUswedX1gmqd6j5eKSWyhmDjtqj86UqVtnlh-k64nikkm99ujh1kMUOMNxcdT-berJUDU&usqp=CAU" />
            </Image>
            <Description>
              <p>Reginalda da Misericórdia</p>
            </Description>
            <Date>
              <p></p>
            </Date>
            <ButtonFinaly>
              <button
                onClick={toggleMenu}
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              >
                <KeyboardDoubleArrowDownSharpIcon />
              </button>
            </ButtonFinaly>
          </List>
          <CardContainer isVisible className={`menu ${isOpen ? "open" : ""}`}>
            <CardListPeople>
              <div>
                <LabelList>Nome: </LabelList>
                <InforList>Reginalda da Misericórdia </InforList>
              </div>
              <div>
                <LabelList>RG: </LabelList>
                <InforList>Reginalda da Misericórdia </InforList>
              </div>
              <div>
                <LabelList>CPF: </LabelList>
                <InforList>410.410.410-44 </InforList>
              </div>
              <div>
                <LabelList>Endereço: </LabelList>
                <InforList>Rua Barão Paulista </InforList>
              </div>
              <div>
                <LabelList>n°: </LabelList>
                <InforList>365 </InforList>
              </div>
              <div>
                <LabelList>CEP: </LabelList>
                <InforList>05022-505</InforList>
              </div>
              <div>
                <LabelList>Nome da mãe: </LabelList>
                <InforList>Juventina da Misericórdia </InforList>
              </div>
              <div>
                <LabelList>Nome do pai: </LabelList>
                <InforList>Tomás da Misericórdia</InforList>
              </div>
            </CardListPeople>
            <CardHistory>
              <span>Hitórico de visitas</span>

              <p> - 10 jan 23</p>
              <p> - 2 dez 22</p>
              <p> - 10 out 22</p>
              <p> - 8 fev 22</p>
              <p> - 25 nov 21</p>
            </CardHistory>
          </CardContainer>
        </ContainerList>
      </Container>
    </>
  );
}
