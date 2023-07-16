import React from "react";
import { Author, Container, PostText, DivLikeComment, DivLike } from "./style";
import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
// import axios from "axios";
// import { BASE_URL } from "../../constants/url";

export const CardComment = (props) => {
  const { comment } = props;

  return (
    <Container>
      <Author>Enviado por: {comment.creator.name}</Author>
      <PostText>{comment.content}</PostText>
      <DivLikeComment>
        <DivLike>
          <button>
            <img src={arrowUp} />
          </button>
          <p>{comment.likes}</p>
          <button>
            <img src={arrowDown} />
          </button>
          <p>{comment.dislikes}</p>
        </DivLike>
      </DivLikeComment>
    </Container>
  );
};
