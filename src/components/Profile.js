import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [country_code, setCountryCode] = useState('');
  const [image, setImage] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [presentAddress, setPresentAddress] = useState('');

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
        setImage(`http://localhost:8000/${data.image}`);
        setRole(data.role);
        setEmail(data.email);
        setGender(data.gender);
        setDOB(data.dob);
        setPermanentAddress(data.permanent_address);
        setPresentAddress(data.present_address);
      })
      .catch((error) => {
        window.location.replace('/logout');
      });
  }, []);

  return (
    <section class='inner-content-dashboard'>
      <div class='inner-content'>
        <section class='profile-pic'>
          <img src={image} className='rounded-circle w-5' alt='profile-img' />
        </section>
        <table>
          <tr>
            <td>Joined as:</td>
            <td>
              <input type='text' name='' id='' disabled value={role} />
            </td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>
              <input type='text' name='uname' id='' disabled value={name} />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type='text' name='email' id='' disabled value={email} />
            </td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>
              <input type='text' name='' id='' disabled value={gender} />
            </td>
          </tr>
          <tr>
            <td>Date of birth:</td>
            <td>
              <input type='date' name='dob' id='' disabled value={dob} />
            </td>
          </tr>
          <tr>
            <td>Contact number:</td>
            <td>
              <input
                type='text'
                name='contact'
                id=''
                disabled
                value={`${country_code}${contact}`}
                size='15'
              />
            </td>
          </tr>
          <tr>
            <td>Present address:</td>
            <td>
              <textarea
                disabled
                name='present_address'
                id=''
                cols='25'
                rows='5'
                value={presentAddress}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Permanent address:</td>
            <td>
              <textarea
                disabled
                name='permanent_address'
                id=''
                cols='25'
                rows='5'
                value={permanentAddress}
              ></textarea>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Profile;
