import React from 'react';
import "./Menubar.css";

const Menubar = ({ open }) => {
    return (
      <nav className={`top-right absolute -top-[21rem] sm:-top-[38rem] w-screen h-screen sm:w-[850px] sm:h-[850px] flex flex-col items-center justify-center z-[111] ${open ? 'open' : ''}`}>
        <a className="disc l1">
          <div>About us</div>
        </a>
        <a className="disc l2">
          <div>Games</div>
        </a>
        <a className="disc l3">
          <div>Store</div>
        </a>
        <a className="disc l4">
          <div>Community</div>
        </a>
      </nav>
    );
}

export default Menubar;
