import React, { useState } from 'react';
import './Command.css'

const Command = () => {
  const [stringBuffer] = useState([])
  var [idx, setIdx] = useState(0);

  const enterKey = (event) => {
    // 엔터 클릭시
    if (event.keyCode === 13) {
      // 콘솔, 커맨드창 선언 및 초기화
      const consoleList = document.querySelector(".console__list");
      const commandText = document.querySelector(".command__text");

      // 커맨드창 텍스트 변수 선언
      var commandTextValue = commandText.value;

      // 커맨드창 텍스트 초기화
      commandText.value = "";

      var cmdLine = document.createElement("li")

      cmdLine.append(commandTextValue)

      // 커맨드창에 올릴 텍스트 추가 작업
      consoleList.appendChild(cmdLine)

      // 버퍼에 텍스트 저장 및 버퍼 길이 저장
      stringBuffer.push(commandTextValue)
      idx = stringBuffer.length - 1;

      if (stringBuffer.length > 30){
        stringBuffer.shift();
        idx = stringBuffer.length - 1;
      }

    }
    // 윗 키보드 클릭시
    else if (event.keyCode === 38) {
      // 버퍼 길이가 1 이상일 때 실행 > 버퍼에 문자열이 들어갔을 때 실행
      if (stringBuffer.length >= 1) {
        const commandText = document.querySelector(".command__text");
        commandText.value = stringBuffer[idx];
        setIdx(
          0 < idx && idx < stringBuffer.length ? idx - 1 : 0
        )

        
      }

    } 
    // 아래 키보드 클릭시
    else if (event.keyCode === 40) 
    {
      // 버퍼 길이가 1 이상일 때 실행 > 버퍼에 문자열이 들어갔을 때 실행
      if (stringBuffer.length >= 1) {
        const commandText = document.querySelector(".command__text");
        commandText.value = stringBuffer[idx];
        setIdx(
          0 <= idx && idx < stringBuffer.length - 1 ? idx + 1 : stringBuffer.length - 1
        )
      }
    }
  }

  return (
    <div className='command'>
      $PSH&#10148;
      <input type="text" placeholder='command' className='command__text' onKeyUp={enterKey} autoFocus />
    </div>
  )
}

export default Command