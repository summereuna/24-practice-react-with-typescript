//Todo의 형태 정의하는 파일

class Todo {
  //타입 지정 (TS만 있는 부분)
  id: string;
  text: string;

  //생성자 만들어 값 할당 (JS에도 있는 부분)
  //인수로 todoText 보내기, id는 생성자 안에서 동적으로 만들기
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString(); //임의 id 만들기 위해 만들어진 날짜 id로 넣어주자
  }
}

export default Todo;
