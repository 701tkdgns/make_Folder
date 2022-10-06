import React from 'react'
import './DashBoard.css'

import {Navigation, Console, Menual} from '../../component'

// help_command_node

// class help_command_node{
//   nodo name string
//   node list[] Array: help_command_node 
// }

const DashBoard = () => {
  return (
    <div className='dashBoard'>
      <Navigation />

      <div className="dashBoard-grid">
        <Console/>
        <Menual/>
      </div>
        
    </div>
  )
}

export default DashBoard