import './App.css'
import Header from "./component/Header";
import Body from "./component/Body"
import Footer from "./component/Footer"

function App() {
  return (
    <div className='App'>
      <Header />
      <Body>
      </Body>
      <Footer />
    </div>
  );
}
export default App;


// function App() {
//   const bodyProps = {
//     name : "박혁거세",
//     location : "부천시",
//     favorList : ["파스타", "빵", "떡볶이"],
//   };