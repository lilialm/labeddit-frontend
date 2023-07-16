import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.p`
    padding-top: 29px;
    padding-bottom: 194px;
    font-family: 'IBM Plex Sans';
    font-weight: 700;
    font-size: 33px;
    line-height: 43px;
    width: 364px;
    color: #373737;
`;

export const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    padding-left: 16px;
    width: 363px;
    height: 60px;
`;

export const DivInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
`;

export const DivText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 65px;
    width: 362px;
    gap: 17px;

    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 14px;

    a {
        color: #4088CB;
        font-style: none;
    }
`;

export const DivCheckBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 38px;
    gap: 11px;
`;


export const Button = styled.button`
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 18px;
`;