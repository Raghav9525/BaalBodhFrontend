import React, { useState } from 'react';
import {Link} from 'react-router-dom'
//login button
import { BiSolidUser } from 'react-icons/bi';
//cross button
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'; // Ensure the correct import
import './style.css';
import Gallery from './Gallery';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to open the side menu
  const openMenu = () => {
    setShowMenu(true);
  };

  // Function to close the side menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  const closeMenuOnItemClick = () => {
    if (showMenu) {
        setShowMenu(false);
    }
};

  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1 className="logo">BaalBodh</h1>
          {/* <img src="./images/logo.png" alt="" className="logo" /> */}
          <ul id="sidemenu" style={{ right: showMenu ? '0' : '-200px' }}>
          <i className="fas" onClick={closeMenu}><AiOutlineClose style={{ fontSize: '32px' }} /> </i>

            <li><Link to="/" onClick={closeMenuOnItemClick}>Home</Link></li>
            <li><Link to="/admission" onClick={closeMenuOnItemClick}>Admission</Link></li>
            <li><Link to="/gallery" onClick={closeMenuOnItemClick}>Gallery</Link></li>

            <li><Link to="/liveclass" onClick={closeMenuOnItemClick}>LiveClass</Link></li>
            <li><Link to="/facultydata" onClick={closeMenuOnItemClick}>Faculty</Link></li>
            <li><Link to="/about" onClick={closeMenuOnItemClick}>About Us</Link></li>
            <li><Link to="/login" onClick={closeMenuOnItemClick}><BiSolidUser style={{ fontSize: '32px' }} /></Link></li>
          </ul>
          <i className="fas" onClick={openMenu}><GiHamburgerMenu style={{ fontSize: '28px' }} /></i>
        </nav>
      </div>
    </div>


    // {/*<nav className="navbar navbar-expand-lg navbar-light bg-light my-custom-nav">
    //        <Link className="navbar-brand" to="/">Poineer Acadmey</Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //         onClick={() => setShowMediaIcons(!showMediaIcons)}
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className={`collapse navbar-collapse ${showMediaIcons ? 'show' : ''}`} id="navbarNav">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/">Home</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/Admission">Admission</Link>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Faculty</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Academics</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">About us</a>
    //           </li>
    //         </ul>
    //         <div className='login'>
    //           <ul className='login-desktop' style={{ listStyleType: 'none', padding: 0 }}>
    //             <li>
    //               <Link to="/Login">
    //                 <BiSolidUser style={{ fontSize: '32px' }} />
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>

    //       </div>
    //     </nav> */}

  );
}

export default Navbar;
