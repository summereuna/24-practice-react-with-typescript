import React from "react";

//정의된 클래스는 새로운 객체를 생성하는 생성자의 역할을 할 뿐만 아니라
//타입 역할도 한다! 클래스 이름은 타입으로도 사용할 수 있다.
import Todo from "../models/todo";

type Props = {
  items: Todo[]; //items은 Todo 객체로 채워진 배열
  // 배열의 객체는 문자열 타입을 가진 id프로퍼티와 text프로퍼티를 가진다.

  children?: React.ReactNode; //옵셔널
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
        //따라서 items의 각요소의 id, text 프로퍼티를 사용할 수 있다.
      ))}
    </ul>
  );
};
export default Todos;
