/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import formatDate from "../../../utils/formatDate";
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
  InputStyle,
  ButtonStyle,
  ContainerSearch,
  FormSearch,
  ButtonRegisterVisit,
  PopUpStyle,
} from "./style";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import paths from "../../../constants";

export function ListPeopleRegister() {
  const [rotationAngles, setRotationAngles] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [openStates, setOpenStates] = useState({});

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [people, setPeople] = useState();
  const { push } = useNavigate();

  const toggleMenu = (id) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    setRotationAngles((prevState) => ({
      ...prevState,
      [id]: prevState[id] === 180 ? 0 : 180,
    }));
  };

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("visits");

      setPeople(data);
    }

    loadOrders();
  }, [people]);

  function editProduct(product) {
    push(paths.Cadastro, { product });
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirm = () => {
    //  Lógica a ser executada quando o usuário confirma
    console.log("Ação confirmada!");
    closePopup(); /// Feche o pop-up após a confirmação
  };

  const handleCancel = () => {
    //  Lógica a ser executada quando o usuário cancela
    console.log("Ação cancelada!");
    closePopup(); ///Feche o pop-up após o cancelamento
  };

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const content = document.body.innerText;
    const index = content.indexOf(searchTerm);

    if (index !== -1) {
      window.scrollTo(+100, index);
    }
  }

  return (
    <>
      <PopUpStyle
        isOpen={isPopupOpen}
        onClose={closePopup}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <Container>
        <ContainerSearch>
          <FormSearch onSubmit={handleSubmit}>
            <div className="search">
              <LabelList>Pesuisar</LabelList>
              <InputStyle type="search" onChange={handleSearch}></InputStyle>
              <ButtonStyle type="submit">
                <PersonSearchIcon />
              </ButtonStyle>
            </div>
          </FormSearch>
        </ContainerSearch>

        {people &&
          people.map((prod) => (
            <ContainerList key={prod.id}>
              <List>
                <Image>
                  <img src={prod.url} />
                </Image>
                <Description>
                  <p>{prod.name}</p>
                </Description>
                <Date>
                  <p>{formatDate(prod.updatedAt)}</p>
                </Date>
                <ButtonRegisterVisit onClick={editProduct}>
                  Registrar Nova visita
                </ButtonRegisterVisit>

                <ButtonFinaly>
                  <button
                    onClick={() => toggleMenu(prod.id)}
                    style={{
                      transform: `rotate(${rotationAngles[prod.id]}deg)`,
                    }}
                  >
                    <KeyboardDoubleArrowDownSharpIcon />
                  </button>
                </ButtonFinaly>
              </List>
              <CardContainer
                isVisible={openStates[prod.id]}
                className={`menu ${openStates[prod.id] ? "open" : ""}`}
              >
                <CardListPeople>
                  <div>
                    <LabelList>Nome: </LabelList>
                    <InforList>{prod.name} </InforList>
                  </div>
                  <div>
                    <LabelList>RG: </LabelList>
                    <InforList>{prod.rg}</InforList>
                  </div>
                  <div>
                    <LabelList>CPF: </LabelList>
                    <InforList>{prod.cpf}</InforList>
                  </div>
                  <div>
                    <LabelList>Endereço: </LabelList>
                    <InforList>{prod.address} </InforList>
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
                    <InforList>{prod.namemother}</InforList>
                  </div>
                  <div>
                    <LabelList>Nome do pai: </LabelList>
                    <InforList>{prod.namefather}</InforList>
                  </div>
                  <div>
                    <LabelList>Veículo: </LabelList>
                    <InforList>{prod.Vehicle}</InforList>
                  </div>
                  <div>
                    <LabelList>Modelo: </LabelList>
                    <InforList>{prod.model}</InforList>
                  </div>
                  <div>
                    <LabelList>Marca: </LabelList>
                    <InforList>{prod.brand}</InforList>
                  </div>
                  <div>
                    <LabelList>Cor: </LabelList>
                    <InforList>{prod.color}</InforList>
                  </div>
                  <div>
                    <LabelList>Crachá: </LabelList>
                    <InforList>{prod.spat}</InforList>
                  </div>
                </CardListPeople>
                <CardHistory>
                  <span>Hitórico de visitas</span>

                  <p>{formatDate(prod.createdAt)}</p>
                  <p>{formatDate(prod.updatedAt)}</p>
                  <p>{formatDate(prod.createdAt)}</p>
                  <p>{formatDate(prod.createdAt)}</p>
                </CardHistory>
              </CardContainer>
            </ContainerList>
          ))}
      </Container>
    </>
  );
}
