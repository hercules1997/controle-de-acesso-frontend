import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { ErrorMessage } from "../../../components";
import paths from "../../../constants";

import {
  Container,
  ContainerItens,
  Label,
  ContainerMaster,
  ButtonStyle,
  BackgroundStyle,
  All,
  InputStyle,
} from "./style";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useUser } from "../../../hooks/UserContext";

/*
ESTRUTURA DE LOGIN
*/

export function Login() {
  const { putUserData } = useUser();
  const navigate = useNavigate();

  /*
   VALIDAÇÃO DO FORMULÁRIO COM YUP
  */

  //TODO Colocar o ".required("Usuário é obrigatório")" e ".required("Senha obrigatória")"
  const schema = Yup.object().shape({
    usuario: Yup.string(),
    // .required("Usuário obrigatório"),
    password: Yup.string()
      // .required("Senha obrigatória")
      .min(6, "Senha deve ter no mínimo 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  /*
   CHAMADA A API E REALIZA O ACESSO
   */
  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("sessions", {
        usuario: clientData.usuario,
        password: clientData.password,
      }),
      {
        pending: "Verificando seus dados...",
        success: "Seja bem-vindo(a)!",
        error: "Dados incorretos",
      }
    );
    putUserData(data);

    setTimeout(() => {
      navigate(paths.ListRegisters);
    }, 1000);
    // navigate(paths.ListRegisters);
    // setTimeout(() => {}, 1200);
  };

  return (
    <All>
      <ContainerMaster>
        <BackgroundStyle />
        <Container>
          <ContainerItens>
            {/* FORMULÁRIO */}
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <h2>Sistema de Controle de Acesso ao 4° BI Mec</h2>
              <h3>Login</h3>

              {/* E-MAIL */}
              <div>
                <Label>Usuário</Label>
                <InputStyle
                  type="text"
                  {...register("usuario")}
                  error={errors.usuario?.message}
                />
              </div>
              <ErrorMessage>{errors.usuario?.message}</ErrorMessage>
              <div>
                {/* SENHA */}
                <Label>Senha</Label>
                <InputStyle
                  type="password"
                  {...register("password")}
                  error={errors.password?.message}
                />
              </div>

              <ErrorMessage>{errors.password?.message}</ErrorMessage>
              {/* BOTÃO DE ACESSO */}

              <ButtonStyle type="submit">Entrar</ButtonStyle>
            </form>
          </ContainerItens>
        </Container>
      </ContainerMaster>
      <span style={{ color: "#ffff" }}>
        Copyright © 2023 HCdev desenvolvimento. Todos os Direitos Reservados.
      </span>
    </All>
  );
}
