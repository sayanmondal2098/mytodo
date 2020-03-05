import React from 'react';
// import { } from 'bootstrap';
import '../../assect/css/mycss.css'

// var api_key = f1f66ef328ad5089cd48bdf7d7cb81f6;

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            description: undefined,
            celsius: undefined,
            temp_max : undefined,
            temp_min : undefined,
            pressure : undefined,
            humidity : undefined,
            error : false
          };
    }

    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f1f66ef328ad5089cd48bdf7d7cb81f6`)
        .then(response => response.json())
        .then(data => this.setState({
            city: data.name, 
            country: data.sys.country,
            icon: data.weather[0].icon,
            main: data.weather[0].main,
            description : data.weather[0].description,
            celsius : data.main.temp,
        },
             console.log(data)))
      }

    render(){
        const {city, country, icon , main , description, celsius, temp_max, temp_min, pressure, humidity, error} = this.state;
        const imgsrc= `http://openweathermap.org/img/wn/${icon}@2x.png`;
        return(
            <div className="App">
            <header className="App-header">
              <h1>
                  { country}
                  </h1>   
                  <h4>
                  { city}
                  </h4>   
                  <img src = {imgsrc}/>    
                <h4>
                      {celsius} <br /> {description}
                </h4>       
            </header>
          </div>
        );
    }
}

export default Weather ;


// f1f66ef328ad5089cd48bdf7d7cb81f6