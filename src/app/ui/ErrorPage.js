import React from 'react';
import '../../assect/css/mycss.css';
import BG from '../../assect/image/404.jpg'

class ErrorPage extends React.Component{
    render(){
        return(
            <div className="">
                <div className="error">
                    <img src={BG} className="error"/>
                </div>
            </div>
        )
    }
}

export default ErrorPage;