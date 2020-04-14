import React from 'react';

import '../../assect/css/mycss.css'
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class User extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            username: '',
            password: '',
          };
              
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.getWeather = this.getWeather.bind(this);

    }



    calCelsius(temp){
        let cell = Math.floor(temp - 273.15);
        return cell
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
      }

      handlePasswordChange(event) {
        this.setState({password : event.target.value});
      }

    getWeather(e){
        e.preventDefault();
        axios.post(`http://localhost:8080/vmart/login?email=${this.state.username}&password=${this.state.password}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
             })
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({ error: true });

      }




    render(){   
        const {username, password,lon, lat,  icon , main , description, celsius, temp_max, temp_min, pressure,
                     humidity, visibility ,wind_speed,rain, clouds, error} = this.state;
        const imgsrc= `http://openweathermap.org/img/wn/${icon}@2x.png`;
        if (error) {
            Redirect('https://google.com')
          } 
        return(
            
            
            <div className="App">
                
            <header className="App-header">
            <form onSubmit={this.getWeather}>
            <input  type="text"
                name="city" 
                placeholder="Enter user Name..." 
                value={this.state.username}
                onChange={this.handleUsernameChange}/>
                
		    <input type="text" name="password" placeholder="password Name (Optional)..."
            value={this.state.password}
            onChange={this.handlePasswordChange}
            />
		    <button>Get User</button>
	        </form>
              <h1>
                  { username }
                  </h1>   
                  <h4>
                  { password }
                  </h4>   
                  <img src = {imgsrc}/>    
                <h4>
                      {celsius} <br /> {description} <br /> {visibility} <br /> {clouds}
                </h4>       
            </header>
          </div>
        );
    }
}


export default User ;