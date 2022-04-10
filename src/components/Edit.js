import { useState, useEffect } from 'react';
import axios from 'axios';

const Edit = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [country_code, setCountryCode] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [previousPass, setPreviousPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');

  useEffect(() => {
    const uid = localStorage.getItem('uid');
    // we have to always post using form data
    const formData = new FormData();
    formData.append('id', uid);
    axios
      .post('http://localhost:8000/customer/api/dashboard', formData)
      .then((response) => {
        // console.log(response.data.data);
        const data = response.data.data.info;
        setName(data.name);
        setContact(data.contact_no);
        setCountryCode(data.country_code);
        setEmail(data.email);
        setGender(data.gender);
        setDOB(data.dob);
        setPermanentAddress(data.permanent_address);
        setPresentAddress(data.present_address);
        setImage(data.image);
      })
      .catch((error) => {
        window.location.replace('/logout');
      });
  }, []);

  const handleField = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', localStorage.getItem('uid'));
    formData.append('register_as', 1);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', previousPass);
    formData.append('new_password', newPass);
    formData.append('confirm_new_password', confirmNewPass);
    formData.append('country_code', country_code);
    formData.append('contact', contact);
    formData.append('gender', gender);
    formData.append('dob', dob);
    formData.append('permanent_address', permanentAddress);
    formData.append('present_address', presentAddress);
    formData.append('customer_image', image);

    // const data = {
    //   id: localStorage.getItem('uid'),
    //   register_as: 1,
    //   name: name,
    //   email: email,
    //   password: previousPass,
    //   new_password: newPass,
    //   confirm_new_password: confirmNewPass,
    //   country_code: country_code,
    //   contact: contact,
    //   gender: gender,
    //   dob: dob,
    //   permanent_address: permanentAddress,
    //   present_address: presentAddress,
    //   customer_image: image,
    // };

    // // Prints form data....
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    // --------------------- Problem -----------------------
    axios
      .post('http://localhost:8000/customer/api/edit', formData)
      .then((response) => {
        console.log(response);
        alert('Info updated successfully');
      })
      .catch((error) => {
        console.log(error);
        alert("Couldn't update info.");
      });
  };

  return (
    <section className='inner-content-dashboard'>
      <div className='inner-content mt-2 mb-2'>
        {/* ------------------------------------------------------------ */}
        {/* Have to develop a strategy to upload image */}
        {/* ------------------------------------------------------------ */}
        <form
          action=''
          encType='multipart/form-data'
          method='post'
          onSubmit={handleField}
        >
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                <td>
                  <input
                    type='text'
                    name='uname'
                    className='w-100'
                    id=''
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type='text'
                    className='w-100'
                    name='email'
                    id=''
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Previous password:</td>
                <td>
                  <input
                    type='password'
                    className='w-100'
                    name='prev-pass'
                    id=''
                    value={previousPass}
                    placeholder='required'
                    onChange={(e) => setPreviousPass(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>New password:</td>
                <td>
                  <input
                    type='password'
                    className='w-100'
                    name='new-pass'
                    id=''
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Confirm new password:</td>
                <td>
                  <input
                    type='password'
                    className='w-100'
                    name='confirm-new-pass'
                    id=''
                    value={confirmNewPass}
                    onChange={(e) => setConfirmNewPass(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>
                  <input
                    type='text'
                    className='w-100'
                    name=''
                    id=''
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Date of birth:</td>
                <td>
                  <input
                    type='date'
                    name='dob'
                    id=''
                    className='w-100'
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Contact number:</td>
                <td>
                  <select
                    className='form-select w-100'
                    aria-label='Default select example'
                    value={country_code}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option selected disabled value=''>
                      Select country below
                    </option>
                    <option value='+880'>Bangladesh</option>
                    <option value='+91'>India</option>
                    <option value='+95'>Myanmar</option>
                  </select>
                  <input
                    type='text'
                    name='contact'
                    id=''
                    className='w-100'
                    value={`${contact}`}
                    onChange={(e) => setContact(e.target.value)}
                    size='15'
                  />
                </td>
              </tr>
              <tr>
                <td>Present address:</td>
                <td>
                  <textarea
                    name='present_address'
                    id=''
                    className='w-100'
                    cols='25'
                    rows='5'
                    value={presentAddress}
                    onChange={(e) => setPresentAddress(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>Permanent address:</td>
                <td>
                  <textarea
                    name='permanent_address'
                    id=''
                    className='w-100'
                    cols='25'
                    rows='5'
                    value={permanentAddress}
                    onChange={(e) => setPermanentAddress(e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label for='image' className='form-label d-block'>
                    User image:
                  </label>
                </td>
                <td>
                  <input
                    type='file'
                    id='image'
                    onChange={(e) => setImage(e.target.files[0])}
                  ></input>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type='submit'
                    value='Update'
                    className='btn btn-primary w-100'
                  />
                  {/* <button
                    type='submit'
                    className='btn btn-primary w-100'
                    onClick={handleField}
                  >
                    Update
                  </button> */}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </section>
  );
};

export default Edit;
