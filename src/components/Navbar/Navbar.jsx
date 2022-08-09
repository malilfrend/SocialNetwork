import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeLink = ({isActive}) => isActive ? classes.active : '';


    return (
        <nav className={classes.nav}>

            <NavLink to="/profile" className={activeLink}>
                Profile
            </NavLink>

            <NavLink to="/friends" className={activeLink}>
                Friends
            </NavLink>

            <NavLink to="/dialogs" className={activeLink}>
                Messages
            </NavLink>

            <NavLink to="/news" className={activeLink}>
                News
            </NavLink>

            <NavLink to="/music" className={activeLink}>
                Music
            </NavLink>

            <NavLink to="/settings" className={activeLink}>
                Settings
            </NavLink>
    
            <NavLink to="/users" className={activeLink}>
                Find users
            </NavLink>

        </nav>
    );
};

export default Navbar;