import React from 'react'
import './home.css';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='maindivision'>
    <div className='mainlist'>
        <ul >
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/books'>Books</Link></li>
            <li><Link to='/movies/:name'>Movies</Link></li>
            <li><Link to='/signin'>Signin</Link></li>
        </ul>
    </div>
    <div className='subdivision'>
        WELCOME ALL
        <button onClick={()=>navigate('/check/books')}>Books</button>
    </div>
    </div>
  )
}
export default Home;