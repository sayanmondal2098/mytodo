import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../assect/css/mycss.css';

class Navigation extends React.Component{
    render(){
        return(
            <dev className="sidenav">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/root">Root</NavLink>

            </dev>
        );
    }
}

export default Navigation;