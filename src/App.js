import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {

  let [글제목,b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [num, c] = useState(0);

  return (
    <div className="App">
      <div>
        <button onClick = {() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          b(copy);}}>버튼</button>

        <h4 style = {{color:'black', fontSize : '16px'}}>{글제목[0]}<span onClick={() => {c(num + 1)}}>😍😍</span>{num}</h4>
        <p>2월 17일 발행</p>
        <hr></hr>
        <h4 style = {{color:'black', fontSize : '16px'}}>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr></hr>
        <h4 style = {{color:'black', fontSize : '16px'}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        <hr></hr>
        
          <Compose></Compose>

      </div>
    </div>
  );
}

function Compose() {
  return(
  <div className = '설명'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>);
}

export default App;
