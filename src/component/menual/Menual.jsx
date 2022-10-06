import React from 'react'
import { BsX } from 'react-icons/bs'
import rootNode from './rootNode.js';
import Tree from './Tree/Tree.js';
import './Menual.css'

const Menual = () => {

  const closeMenu = () => {
    const menual = document.querySelector(".menual");
    window.addEventListener("click", (e) => {
      e.preventDefault();
      menual.classList.remove("active");
    })
  }

  return (
    <div className='menual'>
      <div className='menual__title'>
        <i onClick={closeMenu}><BsX /></i>
        <h1>Menual List</h1>
      </div>

      <div className="menual-inner">
        <div className='menual__list'>

          {/* {console.log(menuFolder)} */}
          <Tree trees={rootNode} />

        </div>
      </div>

    </div>
  )
}

export default Menual