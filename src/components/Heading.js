import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarDashboard from './NavbarDashboard';
import Register from './Register';
import NoPage from './NoPage';
import Login from './Login';
import Profile from './Profile';
import Edit from './Edit';
import Logout from './Logout';

const Heading = () => {
  if (localStorage.getItem('uid')) {
    return (
      <BrowserRouter>
        <NavbarDashboard></NavbarDashboard>
        <Routes>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/edit' element={<Edit></Edit>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Login></Login>} />
          <Route path='/sign_up' element={<Register></Register>}></Route>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default Heading;
