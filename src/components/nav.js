import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = (props) =>{


    return(
        <nav >
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}> <i className="fas fa-home"></i> <span>Home</span></NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}><i className="fas fa-user"></i> <span>About Me</span></NavLink></li>
            <li><NavLink to="/myWorks" className={({ isActive }) => isActive ? "active" : ""}><i className="fas fa-laptop-code"></i> <span>My Works</span></NavLink></li>
          </ul>
        </nav>
    )
}

export default Nav;