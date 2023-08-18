import "./App.css";
import Todos from "./components/Todos";

const DUMMY_DATA = ["test 1", "test 2"];

function App() {
  return (
    <div>
      <Todos items={DUMMY_DATA} />
    </div>
  );
}

export default App;
