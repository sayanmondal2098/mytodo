import React from 'react';
import { NavLink } from 'react-router-dom';


import '../../assect/css/mycss.css';
import { FaHome, FaRoad, FaUser } from 'react-icons/fa';

class Navigation extends React.Component{
    render(){
        return(
            <dev className="sidenav">
                <ul>
                <li className="sidenav_ul">
                    <FaHome /><NavLink to="/home">Home</NavLink></li>
                <li className="sidenav_ul">
                    <FaUser/>
                    <NavLink to="/user">User</NavLink></li>
                <li className="sidenav_ul">
                    <FaRoad />
                    <NavLink to="/root">Root</NavLink></li>
                <li className="sidenav_ul">
                    <FaRoad />
                    <NavLink to="/weather">Weather</NavLink></li>
                </ul>

            </dev>
        );
    }
}

export default Navigation;