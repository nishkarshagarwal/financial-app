import React, { useState } from 'react'
import logo from '../../images/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {

    //In React, useState is a Hook that allows you to add and manage state (data that can change) inside a functional component.
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div className='header'>
        <nav className='navbar'>
            <a className='logo'>
                <img src={logo} alt='logo' />
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#fff' }}/>) : (<FaBars size={30} style={{ color: '#fff' }} />)}
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <a href=''>Home</a>
                </li>
                <li className='nav-item'>
                    <a href=''>About</a>
                </li>
                <li className='nav-item'>
                    <a href=''>Testimonnial</a>
                </li>
                <li className='nav-item'>
                    <a href=''>Demo</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar