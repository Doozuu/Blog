import React, { useState } from 'react'
import './App.css'

function App() {
  // addEventListener('click', () => {})
  let posts = '강남 고기 맛집' // 자바스크립트로 서버에서 가져온 데이터를 변수에 저장
  let [글제목, 글제목변경] = useState(['react', 'javascript', 'html/css']) // state로 데이터 저장.
  let [좋아요, 좋아요변경] = useState(0)
  function 제목바꾸기() {
    // 글제목[0] = typescript; (react -> typescript 로 직접 바꾸자 하는것. 이렇게 하면 안됨.)
    // 글제목변경(['typescript', 'javascript', 'html/css']) (배열 다 불러와서 바꾸는거. 되긴 한데 좋은 방식아님.)
    // var newArray = 글제목;  (데이터를 수정하기 위해 state의 복사본을 만듦. 근데 이건 복사가 아니라 값 공유임.)
    var newArray = [...글제목] // 옳은 방식의 공유: deep copy (값 공유x. 서로 독립적인 값을 가지는 복사)
    newArray[0] = 'typescript'
    글제목변경(newArray)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        {/*{변수명} 으로 가져와서 씀.(데이터바인딩)*/}
        <h4>
          <ul>
            <li> {글제목[0]}</li>
            <li>
              <span
                onClick={() => {
                  좋아요변경(좋아요 + 1)
                }}
              >
                ❤️
              </span>
            </li>
            <li>{좋아요}</li>
            <li>
              {' '}
              <button onClick={제목바꾸기}>버튼</button>
            </li>
          </ul>
          {/*특수기호 넣는법: command control space*/}
        </h4>
        <p>2월 17일 발행</p>
        <hr />
        <h4>{글제목[1]}</h4>
        <p>2월 18일 발행</p>
        <hr />
        <h4>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
        <hr />
      </div>

      <Modal />
    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App
