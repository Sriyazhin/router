import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Bookname = ({name}) =>{
  return(
    <div>
      {name ? 
      (<p>The book name is {name}</p>):
      (<p>There are no books checked!</p>)
      }
    </div>
  );
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function Books() {
  let query = useQuery();
  return (
    <div className='maindivision'>
    <div className='mainlist'>
        <ul >
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/books'>Books</Link></li>
            <li><Link to='movies/:name'>Movies</Link></li>
            <li><Link to='/signin'>Signin</Link></li>
        </ul>
    </div>
    <div className='subdivision'>
        <button><Link to='/check/books?name=harrypotter'>Harry Potter</Link></button>
        <button><Link to='/check/books?name=ps'>PS</Link></button>
        <button><Link to='/check/books?name=ikigai'>Ikigai</Link></button>
        <button><Link to='/check/books?name=whitenights'>White Nights</Link></button>
        <Bookname name={query.get('name')} />
    </div>
    </div>
  )
}
