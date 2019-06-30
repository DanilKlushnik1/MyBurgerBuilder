import React, { Component } from 'react';

import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigator/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigator/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : true
    }

    sideDrawerHandler = () => {
        this.setState({showSideDrawer: false})}

    sideDrawToggleClicked = () => {
        this.setState( (prevState) => {
            return({showSideDrawer: !prevState.showSideDrawer})
        })}

    render () {
        return (
            <Aux>
                <SideDrawer 
                    open = {this.state.showSideDrawer} 
                    closed = {this.sideDrawerHandler}/>
                <Toolbar 
                    drawToggleClicked = {this.sideDrawToggleClicked}/>
                <div>, SideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

export default Layout