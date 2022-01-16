

import React, { useState } from 'react';
import {InputTodo} from './inputTodo.jsx';
import {InCompleteTodos} from './inCompleteTodos.jsx';

export const TodoContent: React.FC = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa","bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["uuu"]);

  const onChangeTodoText = (event: { target: { value: React.SetStateAction<string>; }; }) => setTodoText(event.target.value)

  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1)

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickBack = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1)

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  }

  return (
    <>
      <InputTodo
      todoText={todoText}
      onChange={onChangeTodoText}
      onClick={onClickAdd}
      />
      <InCompleteTodos
      todos={incompleteTodos}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
      />

      <div className="complete-area">
        <p className="title">完了TODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>

            );
          })

          }
        </ul>

      </div>
    </>
  );
}
