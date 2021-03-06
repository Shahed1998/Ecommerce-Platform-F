import axios from 'axios';
import { useState } from 'react';

const Register = () => {
  const [role, setRole] = useState('1');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [contact, setContact] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [image, setImage] = useState('');

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user_role', role * 1);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('c_password', confirmPassword);
    formData.append('country_code', countryCode);
    formData.append('contact', contact);
    formData.append('gender', gender);
    formData.append('dob', dob);
    formData.append('permanent_address', permanentAddress);
    formData.append('present_address', presentAddress);
    formData.append('customer_image', image);

    axios
      .post('http://localhost:8000/api/signup', formData)
      .then((response) => {
        alert('Successfully added user');
      })
      .catch((error) => {
        alert('Unable to add user');
      });
  };

  return (
    <>
      <form
        action=''
        className=' d-flex justify-content-center align-items-center'
        encType='multipart/form-data'
        onSubmit={handleForm}
      >
        <div className='w-50'>
          <div className='mb-3 mt-3 w-50 text-center'>
            <h1>Register</h1>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Join as:</label>
            <select
              className='form-select w-50'
              aria-label='Default select example'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option selected disabled>
                Select user role below
              </option>
              <option value='1'>Customer</option>
              <option value='3'>Staff</option>
              <option value='4'>Vendor</option>
            </select>
          </div>
          <div className='mb-3 mt-3'>
            <label className='form-label'>Name:</label>
            <input
              type='text'
              className='form-control w-50'
              id='name'
              placeholder='Enter name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
          <div className='mb-3'>
            <label className='form-label'>Confirm Password:</label>
            <input
              type='password'
              className='form-control w-50'
              id='cpwd'
              placeholder='Renter password'
              name='pswd'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Gender:</label>
            <select
              className='form-select w-50'
              aria-label='Default select example'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option selected disabled value=''>
                Select gender below
              </option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Date of birth:</label>
            <input
              type='date'
              className='form-control w-50'
              id='dob'
              name='dob'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Contact:</label>
            <div className='mb-3'>
              <select
                className='form-select w-50'
                aria-label='Default select example'
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option selected disabled value=''>
                  Select country below
                </option>
                <option value='+880'>Bangladesh</option>
                <option value='+91'>India</option>
                <option value='+95'>Myanmar</option>
              </select>
            </div>
            <input
              type='number'
              className='form-control w-50'
              id='number'
              placeholder='Enter contact number'
              name='c_no'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label d-block'>Permanent address:</label>
            <textarea
              className='w-50'
              id='permanent_address'
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
            ></textarea>
          </div>
          <div className='mb-3'>
            <label className='form-label d-block'>Present address:</label>
            <textarea
              className='w-50'
              id='present_address'
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
            ></textarea>
          </div>
          <div className='mb-3'>
            <label className='form-label d-block'>User image:</label>
            <input
              type='file'
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
