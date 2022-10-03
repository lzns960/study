import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경 ] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState('false');
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경]= useState('');


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=> { 
        let copy = [...글제목].sort();
        글제목변경(copy);
        }}> 가나다순정렬 </button>

      <button onClick={()=> { 
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
        }}> 글수정 </button>

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=> { 따봉변경(따봉+1)} }> 👍 </span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={ ()=> {setModal(!modal)}}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        /* Map 반복문으로 같은 HTML 반복생성 */
        글제목.map(function(a , i){
          return (      
            <div className='list' key={i}>
            <h4 onClick={ ()=> {setModal(!modal); setTitle(i);}}>{ a }
              <span onClick={ (e)=> { e.stopPropagation();
                // state가 array자료일 경우 복사부터 하고 수정해야한다
                let copy = [...따봉]; // 각 변수를 copy에 새 배열로 복사
                copy[i] = copy[i] + 1; // 따봉이 1씩 증가
                따봉변경(copy)}} // 변경된 값을 변경함수(따봉변경)으로 출력
                > 👍 </span>
                { 따봉[i]}             
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={()=> {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
            }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=> {입력값변경(e.target.value);}}/>
      <button onClick={ () => {
        let copy =[...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글발행</button>

      {
        /* 모달창 열고 닫기 */
        // 삼항연산자
        // 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드 
        // state가 true면 보여주세요~ 
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }

      <h4 style={{color : 'red', fontSize : '16px'}}>{ post }</h4>
    </div>
  );
  <Modal2/>
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{ props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[0] = '여자코트 추천';
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  )
}


class Modal2 extends React.Component{
  constructor(props){
    super(props) //props는 여기! 
    //class 컴포넌트에서 state 만들려면 obj형식
    this.state = {
      name : 'kim',
      age : 20,
    }
  }
  render(){
    return (
      //state 출력
      <div>안녕 {this.state.name}
        <button onClick={()=> {
          this.setState({age : 21})
          //class 컴포넌트에서 state 수정
          // state 변경 기존 obj와 비교해서 다른부분만 변경
        }}>버튼</button>
      </div>
    )
  }
}
export default App;
