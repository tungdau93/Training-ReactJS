import React from 'react'
import {Link} from 'react-router-dom'

const  Menu()=> {
  return (
    <div>
        <ul >
            <li>
            <Link to='/'>
                HomePage
            </Link>
            </li>
            <li>
            <Link to='/bai-tap-2'>
                Bài tập 2
            </Link>
            </li>
            <li>
            <Link to='/bai-tap-3'>
                Bài tập 3
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu