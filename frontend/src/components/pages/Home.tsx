import {memo, VFC, FC, useState, useEffect} from "react";
import { Link, Navigate, useRoutes, BrowserRouter as Router,} from 'react-router-dom';
import { TodoList } from "./TodoList"
import { TodoForm } from "./TodoForm"

import { getTodos } from "../../lib/api/todos"
import { Todo } from "../../interfaces/index"
import { TodoContent } from "./todo"

export const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const handleGetTodos = async () => {
      try {
        const res = await getTodos()
        console.log(res)

        if (res?.status === 200) {
          setTodos(res.data.todos)
        } else {
          console.log(res.data.message)
        }
      } catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      handleGetTodos()
    }, [])

    return (
      <>
        <h1>Todo App</h1>
        <Link to="/about">About</Link>
        <Link to="/todo">todo</Link>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </>
    )
  }