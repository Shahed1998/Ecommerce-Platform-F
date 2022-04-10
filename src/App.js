import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Register from './components/Register';
import Login from './components/Login';
import NavbarDashboard from './components/NavbarDashboard';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Edit from './components/Edit';

function App() {
  if (!localStorage.getItem('uid')) {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/sign_up' element={<Register></Register>}></Route>
          <Route path='/sign_in' element={<Login></Login>}></Route>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <NavbarDashboard />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/edit' element={<Edit></Edit>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
