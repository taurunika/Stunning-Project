import React from 'react'
import classes from './topbar.module.css'
import Logo from './images/stunning-logo.png'

const topbar = () => {
    return (
        <nav className={classes.Topbar}>
            <div>
                <img className={classes.Logo} src={Logo} alt='logo'/>
            </div>
            <div className={classes.MenuItemsContainer}>
                <span className={classes.MenuItems}>Home</span>
                <span className={classes.MenuItems}>About</span>
                <span className={classes.MenuItems}>Blog</span>
                <span className={classes.MenuItems}>Jobs</span>
            </div>
            <div className={classes.User}>
                <button className={classes.UserAccount}>Your Account</button>
            </div>
        </nav>
    )
}

export default topbar