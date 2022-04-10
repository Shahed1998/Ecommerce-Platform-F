import axios from 'axios';
import { useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // checking first time of rendering
  useEffect(() => {
    if (localStorage.getItem('uid')) {
      window.location.replace('/profile');
    }
  });

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    axios
      .post('http://localhost:8000/customer/api/login', formData)
      .then((response) => {
        // console.log(response.data.data.id);
        localStorage.setItem('uid', JSON.stringify(response.data.data.id));
        window.location.replace('/profile');
      })
      .catch((error) => {
        alert('User or password did not match');
      });
  };

  return (
    <>
      <form
        action=''
        className='d-flex justify-content-center align-items-center'
        encType='multipart/form-data'
        onSubmit={handleForm}
      >
        <div className='w-50'>
          <div className='mb-3 mt-3 w-50 text-center'>
            <h1>Login</h1>
          </div>
          <div className='mb-3 mt-3'>
            <label className='form-label'>Email:</label>
            <input
              type='email'
              className='form-control w-50'
              id='email'
              placeholder='Enter email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password:</label>
            <input
              type='password'
              className='form-control w-50'
              id='pwd'
              placeholder='Enter password'
              name='pswd'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
