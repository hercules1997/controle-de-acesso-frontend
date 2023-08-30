/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../services/api";
import * as Yup from "yup";
import {
  ButtonSubmit,
  Container,
  ContainerMaster,
  InputStyle,
  Items,
  LabelTitle,
} from "./style";

import { WebCam } from "../../../components";
import { Input } from "../../../components/Input";
import { ErrorMessage } from "../../../components/ErrorMessage";
import paths from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useContact } from "../../../hooks/ContactContext";
export function NewRegister() {
  const [peoples] = useState([]);
  const { putContacts } = useContact({});
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    rg: Yup.number().required("RG obrigatório").min(10),
    cpf: Yup.number().required("CPF é obrigatório").min(11),
    cep: Yup.number().required("CEP é obrigatório").min(8),
    phone: Yup.number().required("Telefone é obrigatório").min(11),
    address: Yup.string().required("Endereço obrigatório"),
    nameMon: Yup.string().required("Nome da mãe obrigatório"),
    nameDad: Yup.string().required("Nome do pai obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const addNewPeople = {
      name: data.name,
      rg: data.rg,
      cpf: data.cpf,
      cep: data.cep,
      address: data.address,
      nameMon: data.name,
      nameDad: data.name,
    };

    await toast.promise(api.post("contatos", addNewPeople), {
      pending: "Criando novo contato...",
      success: "Contato criado com sucesso!",
      error: "Falha ao criar o contato, tente novamente!",
    });
    putContacts(peoples);

    setTimeout(() => {
      navigate(paths.Status);
    }, 2000);
  };
  // useEffect(() => {
  //   async function loadContact() {
  //     const { data } = await api.get("contatos");
  //     setPeoples(data);
  //   }
  //   loadContact();
  // }, []);
  return (
    <Container>
      <ContainerMaster>
        <Items>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Novo Cadastro de Visitante</h2>
            <LabelTitle>
              Nome <span>*</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("name")}
              placeholder="Ex: Carlos Antônio"
              error={errors.name?.message}
            ></InputStyle>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <LabelTitle>
              RG <span>*</span>
            </LabelTitle>
            <Input
              type="number"
              {...register("rg")}
              placeholder="Ex: 24787158-8"
            ></Input>
            <ErrorMessage>{errors.rg?.message}</ErrorMessage>
            <LabelTitle>
              CPF <span>*</span>
            </LabelTitle>
            <Input
              type="number"
              placeholder="Ex: 455.555.555-77"
              {...register("cpf")}
            ></Input>
            <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
            <LabelTitle>
              CEP <span>*</span>
            </LabelTitle>
            <Input
              type="number"
              {...register("cep")}
              placeholder="Ex: 02222-555"
            ></Input>
            <ErrorMessage>{errors.cep?.message}</ErrorMessage>
            <LabelTitle>
              Logadouro <span>*</span>
            </LabelTitle>
            <Input
              type="text"
              {...register("address")}
              placeholder="Ex: Rua Tadeu de Brito"
            ></Input>
            <ErrorMessage>{errors.address?.message}</ErrorMessage>
            <LabelTitle>
              Tel <span>*</span>
            </LabelTitle>
            <Input
              type="number"
              {...register("phone")}
              placeholder="(11) 958478801"
            ></Input>
            <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            <LabelTitle>
              Nome da mãe<span>*</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("name")}
              placeholder="Ex: Marta Antônia"
              error={errors.name?.message}
            ></InputStyle>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <LabelTitle>
              Nome do pai<span>*</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("name")}
              placeholder="Ex: Pedro Antônio"
              error={errors.name?.message}
            ></InputStyle>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <LabelTitle>
              Foto <span>*</span>
            </LabelTitle>
            <WebCam />
            <ButtonSubmit>Enviar</ButtonSubmit>
          </form>
        </Items>
      </ContainerMaster>
    </Container>
  );
}
