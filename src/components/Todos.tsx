import React from "react";

type Props = {
  items: string[];
  children?: React.ReactNode; //옵셔널
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
export default Todos;
