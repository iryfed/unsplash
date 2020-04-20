import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';


const Header = () => {
  return (
    <header
      className="header"
    >
      <div className="container">
        <Link to="/"
         className="logo"
        >
        PHOTO GALLERY
        </Link>
      </div>
    </header>
  )
}

export default Header

