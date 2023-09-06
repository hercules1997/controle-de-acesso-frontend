/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../services/api";
import * as Yup from "yup";
import {
  ButtonSubmit,
  Container,
  ContainerMaster,
  Divisor,
  Cardform,
  InputStyle,
  Items,
  LabelTitle,
} from "./style";

// import { WebCam } from "../../../components";
import { Input } from "../../../components/Input";
import { ErrorMessage } from "../../../components/ErrorMessage";
import paths from "../../../constants";
import { useNavigate } from "react-router-dom";
export function NewRegister() {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string(),
    rg: Yup.number(),
    cpf: Yup.number(),
    phone: Yup.number(),
    address: Yup.string(),
    number: Yup.number(),
    zipcode: Yup.number(),
    namemother: Yup.string(),
    namefather: Yup.string(),
    vehicle: Yup.bool(),
    model: Yup.string(),
    brand: Yup.string(),
    color: Yup.string(),
    spat: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        "visits",
        {
          name: clientData.name,
          rg: clientData.rg,
          cpf: clientData.cpf,
          phone: clientData.phone,
          address: clientData.address,
          number: clientData.number,
          zipcode: clientData.zipcode,
          namemother: clientData.namemother,
          namefather: clientData.namefather,
          vehicle: clientData.vehicle,
          model: clientData.model,
          brand: clientData.brand,
          color: clientData.color,
          spat: clientData.spat,
        },
        { validateStatus: () => true }
      );

      if (status === 201 || status === 200) {
        toast.success("Seu cadastro foi realizado com sucesso!");
        setTimeout(() => {
          if (status === 201 || status === 200) {
            navigate(paths.Status);
          } else {
            navigate(paths.ListRegisters);
          }
        }, 1000);
      } else if (status === 409) {
        toast.warning("Pessoa já cadastrada!");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Sistema fora do ar, tente novamente mais tarde");
    }
  };
  return (
    <Container>
      <ContainerMaster>
        <Items>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Novo Cadastro de Visitante</h2>
            <LabelTitle>
              Nome completo <span> *</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("name")}
              placeholder="Ex: Carlos Antônio"
              error={errors.name?.message}
            ></InputStyle>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <Divisor>
              <Cardform>
                <LabelTitle className="Label_Format" style={{ width: "auto" }}>
                  RG <span>*</span>
                </LabelTitle>
                <Input
                  className="Label_Format"
                  type="number"
                  {...register("rg")}
                  placeholder="Ex: 24787158-8"
                ></Input>
                <ErrorMessage>{errors.rg?.message}</ErrorMessage>
              </Cardform>
              <Cardform>
                <LabelTitle className="Label_Format" style={{ width: "auto" }}>
                  CPF <span>*</span>
                </LabelTitle>
                <Input
                  type="number"
                  placeholder="Ex: 455.555.555-77"
                  {...register("cpf")}
                ></Input>
                <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
              </Cardform>
              <Cardform>
                <LabelTitle>
                  Tel <span>*</span>
                </LabelTitle>
                <Input
                  type="number"
                  {...register("phone")}
                  placeholder="(11) 958478801"
                ></Input>
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
              </Cardform>
            </Divisor>
            <LabelTitle>
              Logadouro <span>*</span>
            </LabelTitle>
            <Input
              type="text"
              {...register("address")}
              placeholder="Ex: Rua Tadeu de Brito"
            ></Input>
            <ErrorMessage>{errors.address?.message}</ErrorMessage>
            <Divisor>
              <Cardform>
                <LabelTitle>
                  n° <span>*</span>
                </LabelTitle>
                <Input
                  type="text"
                  {...register("number")}
                  placeholder="Ex: 254"
                ></Input>
                <ErrorMessage>{errors.number?.message}</ErrorMessage>
              </Cardform>
              <Cardform>
                <LabelTitle className="Label_Format">
                  CEP <span>*</span>
                </LabelTitle>
                <Input
                  type="number"
                  {...register("cep")}
                  placeholder="Ex: 02222-555"
                ></Input>
                <ErrorMessage>{errors.cep?.message}</ErrorMessage>
              </Cardform>
            </Divisor>
            <Divisor>
              <Cardform>
                <LabelTitle>
                  Nome da mãe<span>*</span>
                </LabelTitle>
                <InputStyle
                  type="text"
                  {...register("namemother")}
                  placeholder="Ex: Marta Antônia"
                  error={errors.namemother?.message}
                ></InputStyle>
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </Cardform>
              <Cardform>
                <LabelTitle>
                  Nome do pai<span>*</span>
                </LabelTitle>
                <InputStyle
                  type="text"
                  {...register("namefather")}
                  placeholder="Ex: Pedro Antônio"
                  error={errors.namefather?.message}
                ></InputStyle>
                <ErrorMessage>{errors.namefather?.message}</ErrorMessage>
              </Cardform>
            </Divisor>
            <LabelTitle>
              Veículo<span>*</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("vehicle")}
              error={errors.vehicle?.message}
            ></InputStyle>
            <ErrorMessage>{errors.vehicle?.message}</ErrorMessage>{" "}
            <LabelTitle>
              Modelo<span>*</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("model")}
              placeholder="Ex: Pedro Antônio"
              error={errors.model?.message}
            ></InputStyle>
            <ErrorMessage>{errors.model?.message}</ErrorMessage>{" "}
            <LabelTitle>
              Marca<span>*</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("brand")}
              placeholder="Ex: Pedro Antônio"
              error={errors.brand?.message}
            ></InputStyle>
            <ErrorMessage>{errors.brand?.message}</ErrorMessage>{" "}
            <LabelTitle>
              Cor<span>*</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("color")}
              placeholder="Ex: Pedro Antônio"
              error={errors.color?.message}
            ></InputStyle>
            <ErrorMessage>{errors.color?.message}</ErrorMessage>{" "}
            <LabelTitle>
              Crachá<span>*</span>
            </LabelTitle>
            <InputStyle
              type="text"
              {...register("spat")}
              placeholder="Ex: Pedro Antônio"
              error={errors.spat?.message}
            ></InputStyle>
            <ErrorMessage>{errors.spat?.message}</ErrorMessage>
            {/* <LabelTitle>
              Foto <span>*</span>
            </LabelTitle>
            <WebCam /> */}
            <ButtonSubmit>Enviar</ButtonSubmit>
          </form>
        </Items>
      </ContainerMaster>
    </Container>
  );
}
