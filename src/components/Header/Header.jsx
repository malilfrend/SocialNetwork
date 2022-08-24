import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";

const Header = (props) => {
	return (
		<header className={classes.header}>
			{
				props.isAuth
					?
					<div className={classes.loginBlock}>
						<div className={classes.userLogin}>
							{props.login}
						</div>
						<Button
                            variant="outlined"
                            size="small"
                            className={classes.logBtn}
                            onClick={props.logout}
                        >
                            Log Out
                        </Button>
					</div>
					:
					<div className={classes.loginBlock}>
						<div className={classes.userLogin}>
							<p>Log in please</p>
						</div>
						<NavLink to='/login'>
							<Button
								variant="outlined"
								size="small"
								className={classes.logBtn}
							>
								Log in
							</Button>
						</NavLink>
					</div>
			}
		</header>
	)
}

export default Header;