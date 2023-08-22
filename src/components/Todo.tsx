// import { useRef } from "react";
import classes from "./Todo.module.css";

//함수형 컴포넌트를 만들 때 React.FC 타입 표기를 추가하여 이 컴포넌트가 함수형 리액트 컴포넌트임을 명시한다.
const Todo: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default Todo;
