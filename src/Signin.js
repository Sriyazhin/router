import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Signin() {
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
    <div class="log">
            
            <h1>Sign-in</h1>
                <form class="forms">
                        <label for="username"></label>
                        <input type="text" id="username" placeholder="Username" />
                        <label for="password"></label>
                        <input type="password" id="password" placeholder="Password" />
                </form>
                <form class="subm">
                    <input type="submit" id="submit" placeholder="Submit" name="forms" />
                    
                </form>
                <button><Link to='/'>Go back</Link></button>
            </div>
    </div>
  )
}
