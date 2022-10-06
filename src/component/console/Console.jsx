import React from 'react'
import Command from '../command/Command.jsx'
import './Console.css'


const Console = () => {

  return (
    <div className='console--container'>
      <div className="console-inner">
        <div className="console">
          <ul readOnly autoFocus className='console__list'></ul>
        </div>
      </div>

      <Command />
    </div>
  )
}

export default Console