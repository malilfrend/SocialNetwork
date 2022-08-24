import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
	
	const activeLink = ({isActive}) => isActive ? classes.active : '';
	
	
	return (
		<nav className={classes.nav}>
   
			<div className={classes.linkBlock}>
					<div className={classes.icon}>
						<AccountCircleIcon/>
					</div>
					<NavLink to="/profile" className={activeLink + ' ' + classes.link}>
						Profile
					</NavLink>
			</div>
			
			<div className={classes.linkBlock}>
				<div className={classes.icon}>
					<MessageIcon/>
				</div>
				<NavLink to="/dialogs" className={activeLink + ' ' + classes.link}>
					Messages
				</NavLink>
			</div>
			
			<div className={classes.linkBlock}>
				<div className={classes.icon}>
					<PeopleIcon/>
				</div>
				<NavLink to="/users" className={activeLink + ' ' + classes.link}>
					Users
				</NavLink>
				
			</div>
			
			<div className={classes.linkBlock}>
				<div className={classes.icon}>
					<NewspaperIcon/>
				</div>
				<NavLink to="/News" className={activeLink + ' ' + classes.link}>
					News
				</NavLink>
			</div>
			
			<div className={classes.linkBlock}>
				<div className={classes.icon}>
					<Diversity3Icon/>
				</div>
				<NavLink to="/Friends" className={activeLink + ' ' + classes.link}>
					Friends
				</NavLink>
			</div>
			
			<div className={classes.linkBlock}>
				<div className={classes.icon}>
					<LibraryMusicIcon/>
				</div>
				<NavLink to="/Music" className={activeLink + ' ' + classes.link}>
					Music
				</NavLink>
			</div>
			
			<div className={classes.linkBlock}>
				<div className={classes.icon}>
					<SettingsIcon/>
				</div>
				<NavLink to="/Settings" className={activeLink + ' ' + classes.link}>
					Settings
				</NavLink>
			</div>
			
		</nav>
	);
};

export default Navbar;