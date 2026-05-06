import Editor from "../component/Editor";

const Home = () => {
    return (
        <div>
            <Editor 
                onSubmit={() => {
                    alert("작성 완료 버튼을 클릭했음");
                }}
            />
        </div>
    );
};
export default Home;



// import Button from "../component/Button";
// import Header from "../component/Header";

// const Home = () => {
//     return(
//         <div>
//             <Header
//                 title={"Home"}

//                 leftChild={
//                     <Button
//                         type="positive"
//                         text={"긍정 버튼"}
//                         onClick={() => {
//                             alert("positive button");
//                         }} 
//                     />             
//                 }
            
//                 rightChild={
//                     <Button
//                         type="negative"
//                         text={"부정 버튼"}
//                         onClick={() => {
//                             alert("negative button");
//                         }} 
//                     />
//                 }
//             />
//         </div>
//     );
// };
// export default Home;
