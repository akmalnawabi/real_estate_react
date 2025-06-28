import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header>
    <div className='container m-x-auto'>
      <Link to="/">Home</Link>
    </div>
  </header>;
};

export default Header;
