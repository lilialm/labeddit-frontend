export const goToHomePage = (navigate) => {
  navigate("/posts");
};

export const goToPostPage = (navigate, id) => {
  navigate(`/posts/${id}`);
};

export const goToLoginPage = (navigate) => {
  navigate("/");
};

export const goToSignupPage = (navigate) => {
  navigate("/signup");
};