import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import './home.css';
import Signin from './Signin';
import Check from './Check';
import Movies from './Movies';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/check/*' element={<Check />}></Route>
        <Route path='/movies/:name' element={<Movies />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;