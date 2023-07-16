import React from 'react'
import { Author, Container, PostText, DivLikeComment, DivLike, DivComment } from './style'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import comment from '../../assets/comment.svg'
import { useNavigate } from 'react-router-dom'
import { goToPostPage } from '../../routes/coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'

export const Card = (props) => {
    const navigate = useNavigate();
    const { post, findPosts } = props;
    const like = async (postId) => {
      try {
        let body = {
          like: true,
        };
        await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        });
        findPosts();
      } catch (error) {
        console.log(error);
      }
    };
    const dislike = async (postId) => {
      try {
        let body = {
          like: false,
        };
        await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        });
        findPosts();
      } catch (error) {
        console.log(error);
      }
    };



  return (
        <Container>
            <Author>Enviado por: {post.creator.name}</Author>
            <PostText>{post.content}</PostText>
            <DivLikeComment>
                <DivLike>
                    <button><img src={arrowUp} onClick={() => like(post.id)}/></button>
                    <p>{post.likes}</p>
                    <button><img src={arrowDown} onClick={() => dislike(post.id)}/></button>
                    <p>{post.dislikes}</p>
                </DivLike>
                <DivComment>
                    <button onClick={() => goToPostPage(navigate, post.id)}><img src={comment}/></button>
                </DivComment>
            </DivLikeComment>
        </Container>
  )
}
