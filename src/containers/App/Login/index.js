import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import * as Yup from "yup";

import { ErrorMessage } from "../../../components";
import paths from "../../../constants";
// import { useUser } from "../../hooks/UserContext";
// import api from "../../services/api";
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

/*
ESTRUTURA DE LOGIN
*/

export function Login() {
  //   const { putUserData } = useUser();
  const navigate = useNavigate();

  /*
   VALIDAÇÃO DO FORMULÁRIO COM YUP
  */

  //TODO Colocar o ".required("Usuário é obrigatório")" e ".required("Senha obrigatória")"
  const schema = Yup.object().shape({
    user: Yup.string(),
    password: Yup.string()
    .min(10, "Senha deve ter no mínimo 10 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  /*
   CHAMADA A API E REALIZA O ACESSO
   */
  const onSubmit = () => {
    navigate(paths.ListRegisters);
    setTimeout(() => {}, 1200);
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
                  {...register("user")}
           
                  error={errors.user?.message}
                />
              </div>
              <ErrorMessage>{errors.user?.message}</ErrorMessage>
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

              {/* BOTÃO DE CADASTRAR */}
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
