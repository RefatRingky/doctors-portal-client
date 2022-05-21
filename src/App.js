import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appoitnment from './Pages/Appointment/Appoitnment';
import SignUp from './Pages/Login/SignUp';
import RequiredAuth from './Pages/Login/RequiredAuth';

function App() {
  return (
    <div className='mx-w-7xl mx-auto'>
        <Navbar></Navbar>
        <Routes>
          <Route  path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/appointment' element={
            <RequiredAuth>
              <Appoitnment></Appoitnment>
            </RequiredAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
