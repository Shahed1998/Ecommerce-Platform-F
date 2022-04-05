const Register = () => {
  const register = () => {
    alert('Hello world');
  }

  return (
    <form action="" className=" d-flex justify-content-center align-items-center">
      <div className="w-50" >
        <div className="mb-3 mt-3 w-50 text-center">
          <h1>Register</h1>
        </div>
        <div className="mb-3">
        <label for="role" className="form-label">Join as:</label>
        <select className="form-select w-50" aria-label="Default select example">
          <option selected disabled>Select user role below</option>
          <option value="1">Customer</option>
          <option value="3">Staff</option>
          <option value="4">Vendor</option>
        </select>
      </div>
      <div className="mb-3 mt-3">
        <label for="name" className="form-label">Name:</label>
        <input type="text" className="form-control w-50" id="name" placeholder="Enter name" name="name"/>
      </div>
      <div className="mb-3 mt-3">
        <label for="email" className="form-label">Email:</label>
        <input type="email" className="form-control w-50" id="email" placeholder="Enter email" name="email"/>
      </div>
      <div className="mb-3">
        <label for="pwd" className="form-label">Password:</label>
        <input type="password" className="form-control w-50" id="pwd" placeholder="Enter password" name="pswd"/>
      </div>
      <div className="mb-3">
        <label for="cpwd" className="form-label">Confirm Password:</label>
        <input type="password" className="form-control w-50" id="pwd" placeholder="Renter password" name="pswd"/>
      </div>
      <div className="mb-3">
        <label for="gender" className="form-label">Gender:</label>
        <select className="form-select w-50" aria-label="Default select example">
          <option selected disabled>Select gender below</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="dob" className="form-label">Date of birth:</label>
        <input type="date" className="form-control w-50" id="dob" name="dob"/>
      </div>
      <div className="mb-3">
        <label for="contact" className="form-label">Contact:</label>
        <div className="mb-3">
          <select className="form-select w-50" aria-label="Default select example">
            <option selected disabled>Select country below</option>
            <option value="+880">Bangladesh</option>
            <option value="+91">India</option>
            <option value="+95">Myanmar</option>
          </select>
        </div>
        <input type="number" className="form-control w-50" id="number" placeholder="Enter contact number" name="c_no"/>
      </div>
      <div className="mb-3">
        <label for="permanent_address" className="form-label d-block">Permanent address:</label>
        <textarea className="w-50" id="permanent_address"></textarea>
      </div>
      <div className="mb-3">
        <label for="present_address" className="form-label d-block">Present address:</label>
        <textarea className="w-50" id="present_address"></textarea>
      </div>
      <div className="mb-3">
        <label for="user_img" className="form-label d-block">User image:</label>
        <input type={'file'} ></input>
      </div>
      <button type="submit" className="btn btn-primary" onClick={register}>Submit</button>
      </div>
    </form>
    
  );
};

export default Register;
