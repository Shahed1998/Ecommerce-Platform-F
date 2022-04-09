import { Link } from 'react-router-dom';

const NavbarDashboard = () => {
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
          <li class='nav-item active mr-4'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li class='nav-item mr-4'>
            <Link to='/profile' className='nav-link'>
              Profile
            </Link>
          </li>
          <li class='nav-item mr-4'>
            <Link to='/logout' className='nav-link'>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
