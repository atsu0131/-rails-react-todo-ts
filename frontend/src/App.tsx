import React, { useState, useEffect } from "react"
import { Link, Navigate, useRoutes, BrowserRouter as Router,} from 'react-router-dom';
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"

import { getTodos } from "./lib/api/todos"
import { Todo } from "./interfaces/index"
import { TodoContent } from "./pages/todo"



const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <Home />,
    children: [
      // {path: '*', element: <Navigate to='/404' />},
      // {path: '/', element: <MainView />},
      // {path: '404', element: <PageNotFoundView />},
      // {path: 'account', element: <Navigate to='/account/list' />},
    ],
  };

  const aboutRoutes = {
    path: 'about',
    element: <About />,
    // children: [
    //   {path: '*', element: <Navigate to='/404' />},
    //   {path: ':id', element: <AccountDetailView />},
    //   {path: 'add', element: <AccountAddView />},
    //   {path: 'list', element: <AccountListView />},
    // ],
  };

  const todoRoutes = {
    path: 'todo',
    element: <Contact />,
    // children: [
    //   {path: '*', element: <Navigate to='/404' />},
    //   {path: ':id', element: <AccountDetailView />},
    //   {path: 'add', element: <AccountAddView />},
    //   {path: 'list', element: <AccountListView />},
    // ],
  };

  const routing = useRoutes([mainRoutes, aboutRoutes, todoRoutes]);

  return <>{routing}</>;
};

const AppWrapper: React.FC  = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const Home: React.FC = () => {
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

const Contact: React.FC = () => {
  return <TodoContent />;
}

const About: React.FC = () => {
  return <h2>About</h2>;
}

export default AppWrapper