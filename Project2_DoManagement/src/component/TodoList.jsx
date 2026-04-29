import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {    // Props를 구조 분해 할당
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === ""
        ? todo
        : todo.filter((it) => 
            it.content.toLowerCase().includes(search.toLowerCase()));
    };
    const analyzeTodo = () => {
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;
    }

    return (
        <div className="TodoList">
            <h4>Todo List 🤖👽</h4>
            <input 
                value={search}
                onChange={onChangeSearch}
                className="searchbar" 
                placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    <TodoItem 
                        key={it.id} 
                        {...it} 
                        onUpdate={onUpdate}
                        onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};
export default TodoList;
