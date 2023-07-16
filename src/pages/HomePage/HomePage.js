import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Button, Comments, Container, DivHr, TextArea } from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";

export const HomePage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const [content, setContent] = useState("");
  const { posts, setPosts } = context;

  useEffect(() => {
    findPosts();

    const token = window.localStorage.getItem("token");
    if (!token) {
      goToLoginPage(navigate);
    }
  });

  const findPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async () => {
    try {
      let body = {
        content,
      };
      await axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      findPosts();
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <TextArea
          placeholder="Escreva seu post...!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        ></TextArea>
        <Button onClick={() => createPost()}>Postar</Button>
      </Container>

      <DivHr>
        <hr></hr>
      </DivHr>

      <Comments>
        {posts.map((post) => {
          return <Card key={post.id} post={post} findPosts={findPosts} />;
        })}
      </Comments>
    </>
  );
};
