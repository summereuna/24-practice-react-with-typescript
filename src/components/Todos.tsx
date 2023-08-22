import React, { useContext } from "react";
import Todo from "./Todo";
import classes from "./Todos.module.css";

import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  //컨텍스트 추가
  const todosCtx = useContext(TodosContext);

  //props으로 받던거 컨텍스트로 대체
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
