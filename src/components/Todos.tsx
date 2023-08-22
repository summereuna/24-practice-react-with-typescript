import React from "react";
import Todo from "./Todo";
import classes from "./Todos.module.css";

//정의된 클래스는 새로운 객체를 생성하는 생성자의 역할을 할 뿐만 아니라
//타입 역할도 한다! 클래스 이름은 타입으로도 사용할 수 있다.
import TodoClass from "../models/todo";

type Props = {
  items: TodoClass[]; //items은 Todo 객체로 채워진 배열
  // 배열의 객체는 문자열 타입을 가진 id프로퍼티와 text프로퍼티를 가진다.
  children?: React.ReactNode; //옵셔널
  onRemoveTodo: (id: string) => void;
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;

//props.onRemoveTodo.bind(null, item.id)
//첫 번째 인자: tonRemoveTodo()를 통해 호출될 함수 안에서 무엇을 가르킬지 this를 지정해 줄 수 있다.
//여기선 따로 지정할 필요 없으니 null
//두 번째 인자: 두 번째 인수에 넣는 값은 onRemoveTodo()가 매개변수로 받을 수 있게되므로 item.id 값 넣어주기
