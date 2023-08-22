import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  // 컨텍스트 추가
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText); // props으로 받던거 컨텍스트로 대체
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo 입력</label>
      <input id="text" name="text" type="text" ref={todoTextInputRef}></input>
      <button type="submit">추가</button>
    </form>
  );
};

export default NewTodo;
