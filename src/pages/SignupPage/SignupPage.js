import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  DivCheckBox,
  DivInput,
  DivText,
  Input,
  Title,
} from "./style";
import { Header } from "../../components/Header/Header";
import { Checkbox } from "@chakra-ui/react";
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

export const SignupPage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signUp = async () => {
    try {
      let body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      const response = await axios.post(`${BASE_URL}/users/signup`, body);
      window.localStorage.setItem("token", response.data.token);
      goToHomePage(navigate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Olá, boas vindas ao LabEddit</Title>
        <DivInput>
          <Input
            placeholder="Apelido"
            type="text"
            value={form.name}
            name="name"
            onChange={onChangeForm}
          ></Input>
          <Input
            placeholder="Email"
            value={form.email}
            type="email"
            name="email"
            onChange={onChangeForm}
          ></Input>
          <Input
            placeholder="Senha"
            value={form.password}
            type="password"
            name="password"
            onChange={onChangeForm}
          ></Input>
        </DivInput>
        <DivText>
          <p>
            Ao continuar, você concorda com o nosso <a>Contrato de usuário</a> e
            nossa <a>Política de Privacidade</a>
          </p>
          <DivCheckBox>
            <Checkbox></Checkbox>
            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
          </DivCheckBox>
        </DivText>
        <Button onClick={() => signUp()}>Cadastrar</Button>
      </Container>
    </>
  );
};
