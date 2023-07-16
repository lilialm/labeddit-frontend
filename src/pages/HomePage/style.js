import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 32px 0;
`;

export const DivHr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    height: 1px;
    background-color: #fe7e02;
    border: none;
    width: 363px;
  }
`;

export const TextArea = styled.textarea`
  width: 364px;
  height: 131px;
  padding: 18px 17px;
  background-color: #ededed;
  border-radius: 14px;
`;

export const Button = styled.button`
  width: 365px;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 18px;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 26px 0;
`;
