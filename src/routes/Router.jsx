import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "../pages/SignupPage/SignupPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { HomePage } from "../pages/HomePage/HomePage"
import { PostPage } from "../pages/PostPage/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
