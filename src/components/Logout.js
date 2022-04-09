const Logout = () => {
  localStorage.removeItem('uid');
  return window.location.replace('/');
};

export default Logout;
