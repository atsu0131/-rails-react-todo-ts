import React, { useState, useEffect } from "react"
import { Link, Navigate, useRoutes, BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { TodoList } from "./components/pages/TodoList"
import { TodoForm } from "./components/pages/TodoForm"
import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"

import {Home} from "./components/pages/Home"
import { getTodos } from "./lib/api/todos"
import { Todo } from "./interfaces/index"
import { TodoContent } from "./components/pages/todo"



const App: React.FC = (): JSX.Element => {
  // const mainRoutes = {
  //   path: '/',
  //   element: <Home />,
  // };

  // const aboutRoutes = {
  //   path: 'about',
  //   element: <About />,
  // };

  // const todoRoutes = {
  //   path: 'todo',
  //   element: <Contact />,
  // };

  // const routing = useRoutes([mainRoutes, aboutRoutes, todoRoutes]);

  // return <>{routing}</>;

  return (
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoContent />} />
        <Route path="/" element={<Home />} />
      </Routes>
  )
};

const AppWrapper: React.FC  = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};


const Contact: React.FC = () => {
  return <TodoContent />;
}

const About: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Button>ooo</Button>
    </ChakraProvider>
  )
}

export default AppWrapper