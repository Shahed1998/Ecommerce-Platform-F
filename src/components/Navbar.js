import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark px-1'>
      <Link to='/' className='navbar-brand'>
        Ecommerce Website
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          <li className='nav-item mr-4'>
            <Link to='/sign_up' className='nav-link'>
              Sign up
            </Link>
          </li>
          <li className='nav-item mr-4'>
            <Link to='/' className='nav-link'>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
