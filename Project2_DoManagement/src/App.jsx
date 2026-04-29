import { useReducer, useRef } from 'react';
import './App.css'
import Header from "./component/Header";
import TodoEditor from './component/TodoEditor';
import TodoList from "./component/TodoList";
import TestComp from './component/TestComp';

const mockTodo = [
  {
    id: 0,    // 특정 아이템을 식별하는 고유한 값
    isDone: false,    // 불리언 자료형. 할일이 완료됐는지 여부
    content: "React 공부하기",    // 할일이 무엇인지
    createdDate: new Date().getTime(),    // 할일의 생성 시간
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {   // 상태 변화 코드
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
            ...it,
            isDone: !it.isDone,
          }
          : it
        );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);    // 목 데이터의 id가 0,1,2 이기때문

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
  <div className='App'>
    <TestComp />
    <Header />
    <TodoEditor onCreate={onCreate} />
    <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
  </div>
  );
}
export default App;







// const onCreate = (content) => {
  //   const newItem = {
  //     id: idRef.current,    // idRef의 현재값을 새롭게 추가할 할일 아이템의 id로 지정
  //     content,              // 아이템이 처음 추가되는 경우 id는 3
  //     isDone:false,
  //     createdDate: new Date().getTime(),
  //   };
  //   setTodo([newItem, ...todo]);    // 새롭게 추가된 아이템은 항상 배열의 0번 요소
  //   idRef.current += 1;    //아이템을 추가할때마다 idRef의 현재값은 1씩 늘어남
  // };
  // const onUpdate = (targetId) => {
  //   setTodo(
  //     todo.map(
  //       (it) => {
  //         if (it.id === targetId) {
  //           return {
  //             ...it,
  //             isDone: !it.isDone,
  //           };
  //         }
  //         else {return it;}
  //       }
  //     )
  //   );
  // };
  // const onDelete = (targetId) => {
  //   setTodo(todo.filter((it) => it.id !== targetId));
  // };