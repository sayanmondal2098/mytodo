import React from 'react';
// import { } from 'bootstrap';
import GetWeather from '../component/GetWeather';
import '../../assect/css/mycss.css'


class Weather extends React.Component{
    constructor(props){
        super(props);

    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            city: '',
            country: '',
            lon : undefined,
            lat : undefined,
            icon: undefined,
            main: undefined,
            description: undefined,
            celsius: undefined,
            temp_max : undefined,
            temp_min : undefined,
            pressure : undefined,
            humidity : undefined,
            wind_speed : undefined,
            visibility : undefined,
            rain : undefined,
            clouds : undefined,
            error : false
          };
    }



    calCelsius(temp){
        let cell = Math.floor(temp - 273.15);
        return cell
    }

    getWeather(e){
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country =  e.target.elements.country.value;
        console.log(city+" "+country)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=f1f66ef328ad5089cd48bdf7d7cb81f6`)
        .then(response => response.json())
        .then(data => this.setState({
            city: data.name, 
            country: data.sys.country,
            lon : data.coord.lon,
            lat : data.coord.lat,
            icon: data.weather[0].icon,
            main: data.weather[0].main,
            description : data.weather[0].description,
            celsius : this.calCelsius(data.main.temp),
            temp_min : this.calCelsius(data.main.temp_min),
            temp_max : this.calCelsius(data.main.temp_max),
            pressure : data.main.pressure,
            humidity : data.main.humidity,
            visibility : data.visibility,
            wind_speed : data.wind.speed,

            // rain : data.rain[1],
            clouds : data.clouds.all,

            

        },
             console.log(data)))
    }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.city+ this.state.country);
        event.preventDefault();
      }


    render(){
        const {city, country    ,lon, lat,  icon , main , description, celsius, temp_max, temp_min, pressure,
                     humidity, visibility ,wind_speed,rain, clouds, error} = this.state;
        const imgsrc= `http://openweathermap.org/img/wn/${icon}@2x.png`;
        return(
            
            <div className="App">
                
            <header className="App-header">
            <form onSubmit={this.handleSubmit}>
            <input  type="text"
                name="city" 
                placeholder="City..." 
                value={this.state.city}
                onChange={this.handleChange}/>
                
		    <input type="text" name="country" placeholder="Country..."/>
		    <button>Get Weather</button>
	        </form>
              <h1>
                  { country}
                  </h1>   
                  <h4>
                  { city}
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

export default Weather ;


// f1f66ef328ad5089cd48bdf7d7cb81f6