import React, { useState } from 'react'
import './App.css'

function App() {
  let posts = '강남 고기 맛집' // 자바스크립트로 서버에서 가져온 데이터를 변수에 저장
  let [글제목, 글제목변경] = useState(['react', 'javascript', 'html/css']) // state로 데이터 저장.
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        {' '}
        {/*{변수명} 으로 가져와서 씀.(데이터바인딩)*/}
        <h4>
          {글제목[0]} <span onClick="">❤️</span> 0
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
    </div>
  )
}

export default App
