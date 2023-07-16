import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 14px 0;
`;

export const DivHr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    hr {
        height: 1px;
        background-color: #FE7E02;
        border: none;
        width: 363px;
    }
`;

export const TextArea = styled.textarea`
    width: 364px;
    height: 131px;
    padding: 18px 17px;
    background-color: #EDEDED;
    border-radius: 12px;
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

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 26px;
`;