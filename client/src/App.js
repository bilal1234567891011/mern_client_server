import './App.css';
import { Routes,Route } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Signup></Signup>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/home' element={<Home></Home>}></Route>


      </Routes>
    </div>
  );
}

export default App;
