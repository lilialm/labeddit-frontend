import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import {
  ButtonCreate,
  ButtonLogin,
  Container,
  DivButton,
  DivInput,
  DivLogo,
  DivRow,
  Input,
} from "./style";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

export const LoginPage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async () => {
    try {
      const body = {
        email: form.email,
        password: form.password,
      };
      const response = await axios.post(`${BASE_URL}/users/login`, body);
      window.localStorage.setItem("token", response.data.token);
      goToHomePage(navigate);
      context.setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <DivLogo>
        <img src={logo} />
        <h1>Labeddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </DivLogo>
      <DivRow>
        <DivInput>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={onChangeForm}
          ></Input>
          <Input
            placeholder="Senha"
            type="password"
            name="password"
            onChange={onChangeForm}
          ></Input>
        </DivInput>
        <DivButton>
          <ButtonLogin onClick={login}>Continuar</ButtonLogin>
          <hr></hr>
          <ButtonCreate onClick={() => goToSignupPage(navigate)}>
            Crie uma conta
          </ButtonCreate>
        </DivButton>
      </DivRow>
    </Container>
  );
};
