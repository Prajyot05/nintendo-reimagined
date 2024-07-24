import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';
import NavBar from './NavBar';

const NavbarParent = () => {
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setOpen(true);
    //   }, 800);
  
    //   return () => clearTimeout(timer);
    // }, []);
  
    const toggleMenu = () => {
      setOpen(!open);
    };

    return (
        <div className='absolute flex flex-col items-center justify-center w-screen'>
            <NavBar toggleMenu={toggleMenu} />
            <Menubar open={open} />
        </div>
    );
}

export default NavbarParent;
