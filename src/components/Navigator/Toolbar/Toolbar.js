import React from 'react'

import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';

const Toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <DrawToggle clicked = {props.drawToggleClicked}/>
        <Logo/>
        <nav className = {classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar