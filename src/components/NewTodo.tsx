import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //사용자 입력값 키보드 입력마다 받지않고 한번에 받기 위해 useRef 사용
  //레퍼런스와 연결할 HTML요소를 구체적으로 설정해야 한다.
  //모든 돔 요소들은 미리 정의된 타입을 가진다.
  //그리고 디폴트 값을 항상 넣어줘야 한다. 시작값에 넣을게 없으면 null
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    //레퍼런스에는 항상 current 프로퍼티가 있고 이 안에 실제 값이 들어 있다.

    //가져온 값 검증
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    //enteredText todos 목록에 추가하기
    //App 컴포넌트에 있는 함수 호출하여 데이터 props으로 올려보내기
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo 입력</label>
      <input id="text" name="text" type="text" ref={todoTextInputRef}></input>
      <button type="submit">추가</button>
    </form>
  );
};

export default NewTodo;
