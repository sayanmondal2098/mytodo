import React from 'react';
import {FaInstagram, FaLinkedinIn, FaLinkedin, FaFacebook, FaMailBulk} from 'react-icons/fa';
import {  FiMail } from 'react-icons/fi';
import '../../assect/css/mycss.css';

class Footer extends React.Component{
    render(){
        return(
            <div>
            <div className="footer">
            <p>
                    2, MY ADDRESS 
                    SALTLAKE, KOLKATA
                    PIN - 700067
                </p>
                <div>
                <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a>
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </a>
                <a href="http://www.linkedin.com/in" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
                </a>
                <a href="http://www.gmail.com" target="_blank" rel="noopener noreferrer">
                <FiMail />
                </a>
            
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;