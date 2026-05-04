import "./TodoEditor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoEditor = () => {     //Props 객체를 구조 분해 할당
    const { onCreate } = useContext(TodoDispatchContext);
    const [content, setContent] = useState(""); //사용자가 입력 폼에 입력한 데이터를 저장할 State 변수
    const inputRef = useRef();          // 할일 입력 폼을 제어할 객체 inputRef를 생성
    const onChangeContent = (e) => {        // 입력 폼의 onChange 이벤트 핸들러 만듦
        setContent(e.target.value);
    };
    const onSubmit = () => {
        if (!content) {                    // 현재 content 값이 빈 문자열이면 
            inputRef.current.focus();      // inputRef가 current로 저장한 요소에 포커스하고 종료
            return;
        }
        onCreate(content);
        setContent("");     // 함수 setContent를 호출해 인수로 빈 문자열을 전달한다.
    };      // 그러면 새 아이템을 추가하고 난 후, content 값은 빈 문자열이 되고 입력 폼 역시 초기화된다.
    
    const onKeyDown = (e) => {      // Enter를 눌렀을 때 호출할 이벤트 핸들러
        if (e.keyCode === 13) {     // 13 = Enter를 의미
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✍️✏️</h4>
            <div className="editor_wrapper">
                <input 
                    ref={inputRef}      // inputRef는 현재값으로 이 요소를 저장한다.
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};
export default TodoEditor;
