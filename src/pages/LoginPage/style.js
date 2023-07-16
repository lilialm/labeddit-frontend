import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 107px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const DivLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  h1 {
    margin: 0;
    font-family: "IBM Plex Sans";
    font-weight: 900;
    font-size: 36px;
    line-height: 47px;
    color: #373737;
    padding-top: 11px;
  }
  p {
    margin: 0;
    font-family: "IBM Plex Sans";
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  hr {
    height: 1px;
    background-color: #fe7e02;
    border: none;
    width: 363px;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
  padding-left: 16px;
  width: 363px;
  height: 60px;
`;

export const ButtonLogin = styled.button`
  width: 365px;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 18px;
`;

export const ButtonCreate = styled.button`
  width: 365px;
  height: 51px;
  background: none;
  border: 1px solid #fe7e02;
  border-radius: 27px;
  color: #fe7e02;
  font-weight: 700;
  font-size: 18px;
`;
