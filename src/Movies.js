import React from 'react'
import { Link, useParams} from 'react-router-dom';

export default function Movies() {
    const params = useParams();
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
    <div className='subdivision '>
    Movie name: {params.name}
    </div>
    </div>
  )
}
