import React, { useState } from "react";
import TodoClass from "../models/todo";

//type Alias 만들어 타입 표기 재사용하기
type TodosContextObj = {
  items: TodoClass[];
  addTodo: (newTodoText: string) => void;
  removeTodo: (id: string) => void;
};

//TodosContext 컨텍스트 모양
//제네릭 타입 안에 이 객체 타입 설정 => 위에서 만든 타입 재사용
export const TodosContext = React.createContext<TodosContextObj>({
  //객체 모양
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

//컨텍스트 제공해주는 컴포넌트 만들기
type Props = {
  children?: React.ReactNode;
};
const TodosContextProvider: React.FC<Props> = (props) => {
  //상태관리
  const [todos, setTodos] = useState<TodoClass[]>([]);

  //Todo 추가하기
  //newTodoText를 받기 때문에 위에 타입 정의 해줘야 함
  const addTodoHandler = (newTodoText: string) => {
    const newTodo = new TodoClass(newTodoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  //Todo 삭제하기
  const removeTodoHandler = (clickedTodoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== clickedTodoId);
    });
  };

  //Context Value 타입 모양대로 만들기
  //타입은 => 위에서 만든 타입 재사용
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

//Provider는 기본으로 익스포트
export default TodosContextProvider;
