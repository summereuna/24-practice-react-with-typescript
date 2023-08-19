import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const todos = [new Todo("test1"), new Todo("test2")];

function App() {
  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
