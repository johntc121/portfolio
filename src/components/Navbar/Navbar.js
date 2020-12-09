import React  from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return(
        <div className='navBar'> 
                <ul className="navBar-links">
                    <NavLink className='navLink' to='/'>Home</NavLink>
                    <NavLink className='navLink' to='/about'>About</NavLink>
                    <NavLink className='navLink' to='/projects'>Projects</NavLink>
                </ul>
        </div>
    )
}

export default Navbar

//carosuel type view on home page
//list type view on projects page