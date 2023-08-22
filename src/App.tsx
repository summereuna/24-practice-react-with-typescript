import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoClass from "./models/todo";

function App() {
  const [todos, setTodos] = useState<TodoClass[]>([]);

  //이 함수를 onAddTodo를 통해 NewTodo 컴포넌트로 전달하려면 동일한 형태로 함수를 만들어야 한다.
  //=> 반환값이 없는 매개변수 하나 받는 함수
  const addTodoHandler = (newTodoText: string) => {
    //state에 추가될 항목의 형태는 TodoClass 형태여야 하므로 인수로 받은 데이터를 new TodoClass 생성자를 호출하여 인수로 전달한다.
    const newTodo = new TodoClass(newTodoText);
    //state를 업데이트하려면 바로 값을 넣지 말고 함수 형태를 사용하여 state를 업데이트 해야한다.
    setTodos((prevTodos) => {
      //기존 배열에 concat()메서드를 적용하여 새로운 배열을 반환
      //그러면 리액트는 newTodo가 포함된 새로운 배열은 새로운 state로 사용한다.
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (clickedTodoId: string) => {
    setTodos((prevTodos) => {
      //배열의 아이템들 다 돌려서 id 값이 removeTodoHandler가 받은 인자인 clickedTodoId값과 같지 않은 것만 모아 새로운 배열로 반환하기
      return prevTodos.filter((todo) => todo.id !== clickedTodoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
