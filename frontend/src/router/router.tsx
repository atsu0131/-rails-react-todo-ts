import React, { useState, useEffect } from "react";
import { Link, Navigate, useRoutes, BrowserRouter,Routes,Route} from 'react-router-dom';

import { TodoList } from "../components/pages/TodoList"
import { TodoForm } from "../components/pages/TodoForm"
import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from "../theme/theme"

import {Home} from "../components/pages/Home"
import { getTodos } from "../lib/api/todos"
import { Todo } from "../interfaces/index"
import { TodoContent } from "../components/pages/todo"
import { About } from "../components/pages/About"
import { Login } from "../components/pages/Login"

export const Router: React.VFC = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<TodoContent />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
  };