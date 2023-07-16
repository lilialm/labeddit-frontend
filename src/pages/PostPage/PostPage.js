import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Button, Comments, Container, DivHr, TextArea } from './style'
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams } from 'react-router-dom';
import { CardComment } from '../../components/Card/CardComment';

export const PostPage = () => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState();

  const params = useParams();

  useEffect(() => {
    fetchComments()
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/comments/${params.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async () => {
    try {
      let body = {
        content,
      };
      await axios.post(`${BASE_URL}/comments/${params.id}`, body, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      fetchComments();
      setContent("");
      console.log(comments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <Header/>
        <Container>
            <TextArea placeholder='Adicionar comentário' value={content}
              onChange={(e) => setContent(e.target.value)}></TextArea>
            <Button type="submit" onClick={() => createComment(params.id)}>Responder</Button>
        </Container>
        
        <DivHr>
            <hr></hr>
        </DivHr>

        <Comments>
          {comments && comments.map((comment) => {return <CardComment key={comment.id} comment={comment}/>;
            })} 
        </Comments>
    </>
  )
}
