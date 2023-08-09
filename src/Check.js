import React from 'react';
import Books from './Books';
import Movies from './Movies';
import { Route, Routes } from 'react-router-dom';

export default function Check() {
  return (
    <div>
        <Routes>
            <Route path='/books' element={<Books />}></Route>
            
        </Routes>
    </div>
  )
}
