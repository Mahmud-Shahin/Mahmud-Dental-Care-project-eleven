
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Register from './pages/Register/Register';
import Servicedetail from './pages/Servicedetails/Servicedetail';

import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<Servicedetail></Servicedetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>

          </RequireAuth>

        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
