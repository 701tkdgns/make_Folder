import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='signUp'>
      <div className="signUp-container">
        <h1>SIGN UP</h1>
        <form action="" className="signUp__form">
          <div className="signUp__form--id">
            <label htmlFor="id">아이디</label>
            <input type="text" name='id' required />
          </div>
          <div className="signUp__form--password">
            <label htmlFor="pw">비밀번호</label>
            <input type="password" name='pw' required />
          </div>
          <div className="signUp__form--password-check">
            <label htmlFor="pwCheck">비밀번호 확인</label>
            <input type="password" name='pwCheck' required />
          </div>
          <div className="signUp__form--license">
            <label htmlFor="license">라이센스 코드</label>
            <input type="text" name='license' required />
          </div>

          <div className="signUp__form--footer">

            <div className="signUp__form--footer-back">
              <Link to="/login"><i><BsArrowLeft /></i> 뒤로가기</Link>
            </div>

            <div className="signUp__form--footer-button">
              <input type="submit" value="SIGN UP" />
            </div>

          </div>


        </form>
      </div>
    </div>
  )
}

export default SignUp