import "./Body.css";
import { useState } from "react";

function Viewer() {
    console.log("viewer component update!");
    return <div>Viewer</div>;
}

function Body() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(number-1);
    };
    return (
        <div>
            <h2>{number}</h2>
            <Viewer number={number} />

            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
}

export default Body;






// function Body() {
//     const [state, setState] = useState( {
//     name : "",
//     gender : "",
//     birth : "",
//     bio : "",
// } );

//     const handleOnChange = (e) => {
//         console.log("현재 수정 대상: ", e.target.name);
//         console.log("수정값: ", e.target.value);
//         setState( {
//             ...state,
//             [e.target.name]: e.target.value,
//         } );
//     };

//     return (
//         <div className="body">
//             <div>
//                 <input 
//                     name="name"
//                     value={state.name}
//                     onChange={handleOnChange}
//                     palceholder="이름"
//                 />
//             </div>

//             <div>
//                 <select name="gender" value={state.gender} onChange={handleOnChange}>
//                     <option key={""}></option>
//                     <option key={"남성"}>남성</option>
//                     <option key={"여성"}>여성</option>
//                 </select>
//             </div>

//             <div>
//                 <input 
//                     name="birth"
//                     type="date"
//                     value={state.birth}
//                     onChange={handleOnChange}
//                 />
//             </div>

//             <div>
//                 <textarea name="bio" value={state.bio} onChange={handleOnChange} />
//             </div>
//         </div>
//     );
// }





// function Body({name, location, favorList = []}) {
//     console.log(name, location, favorList);
//     return ( 
//         <div className="body">
//         {name}는 {location}에 거주합니다.
//         <br />
//         {favorList} 중에,
//         {favorList.length}개의 음식을 좋아합니다.
//         </div>
//     );
// }



// function Body() {
//     function handleOnClick(e) {
//         console.log(e);
//         console.log(e.target.name);
//         alert("버튼을 클릭하셨군요!");
//     }
//     return (
//         <div className="body">
//             <button name="A버튼" onClick={handleOnClick}>A버튼</button>
//             <button name="B버튼" onClick={handleOnClick}>B버튼</button>
//             <button name="벤자민버튼" onClick={handleOnClick}>벤자민버튼</button>             
//         </div>
//     );
// }