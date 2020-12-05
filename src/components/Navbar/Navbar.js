import React  from 'react';
import {NavLink} from 'react-router-dom';
// import './Navbar.scss';


const Navbar = () => {
    return(
        <div className='navBar'> 
            <div className='navbar-fixed'>
                <ul className="right">
                    <NavLink className='navLink' to='/'>Home</NavLink>
                    <NavLink className='navLink' to='/about'>About</NavLink>
                    <NavLink className='navLink' to='/projects'>Projects</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar