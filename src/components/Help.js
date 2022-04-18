import axios from 'axios';
import { useState, useEffect } from 'react';

const Help = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
      const uid = localStorage.getItem('uid');
    //   setEmail(uid);
      axios.get(`http://localhost:8000/customer/api/help/${uid}`).then((response)=>{
          setEmail(response.data);
      }).catch((error)=>{
          console.log(error);
      });
  },[]);

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
            <h1>Help</h1>
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
            <label className='form-label'>Question:</label><br/>
            <textarea className='form-control w-50' id='question'>

            </textarea>
          </div>
          <button type='submit' className='btn btn-primary w-50'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Help;
