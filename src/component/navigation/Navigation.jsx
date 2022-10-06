import React from 'react';
import { Link } from 'react-router-dom';
import {BsList} from 'react-icons/bs'
import './Navigation.css';


const Navigation = () => {

  const openMenu = () => {
    const menual = document.querySelector(".menual");
    window.addEventListener("click", (e) => {
      menual.classList.add("active");
    })
  }

  const reLoad = () => {
    window.location.reload();
  }


  return (
    <div className='navigation'>
      <div className="navigation-container container">
        <div className='navigation__logo'>
          <Link onClick={reLoad}>LOGO</Link>
        </div>

        <ul className="navigation__list">
          <li><p>LOGOUT</p></li>
          <li>
              <i className='navigation__list--menual-btn' onClick={openMenu}><BsList/></i>            
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navigation