import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component{
    render(){
        return(
            <dev>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/root">Root</NavLink>

            </dev>
        );
    }
}

export default Navigation;