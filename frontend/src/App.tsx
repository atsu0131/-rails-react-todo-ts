import React, { useState, useEffect } from "react"
import { TodoList } from "./components/pages/TodoList"
import { TodoForm } from "./components/pages/TodoForm"
import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"

import {Home} from "./components/pages/Home"
import { getTodos } from "./lib/api/todos"
import { Todo } from "./interfaces/index"
import { TodoContent } from "./components/pages/todo"
import { About } from "./components/pages/About"
import { Router } from "./router/router"


const App: React.VFC  = () => {
  return (
      <Router />
  );
};


const Contact: React.FC = () => {
  return <TodoContent />;
}


export default App