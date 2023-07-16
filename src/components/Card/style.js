import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 9px 10px;
    gap: 18px;
    width: 364px;
    height: 167px;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
`;

export const Author = styled.p`
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #6F6F6F;
`;

export const PostText = styled.p`
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

export const DivLikeComment = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 175px;
    gap: 15px;
`;

export const DivLike = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98px;
    border: 0.796748px solid #ECECEC;
    border-radius: 28px;
    padding: 5px;
    gap: 14px;

    p {
    font-family: 'IBM Plex Sans';
    font-weight: 700;
    font-size: 9px;
    color: #6F6F6F;
    }

    img {
        width: 14px;
        height: 14px;
    }
`;

export const DivComment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    border: 0.796748px solid #ECECEC;
    border-radius: 28px;
    padding: 5px;
    gap: 10px;

    p {
        font-family: 'IBM Plex Sans';
        font-weight: 400;
        font-size: 9px;
        color: #6F6F6F;
    }

    img {
        width: 14px;
        height: 14px;
    }
`;