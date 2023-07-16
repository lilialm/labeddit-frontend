import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';
import { GlobalContext } from "./contexts/GlobalContext.jsx";
import Router from "./routes/Router";


function App() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const context = {
      users,
      setUsers,
      posts,
      setPosts,
      comments,
      setComments,
      isAuth,
      setIsAuth,
    };

  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <Router/>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
