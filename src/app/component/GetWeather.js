import React from "react";


class GetWeather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {city: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.city);
        event.preventDefault();
      }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
        <input  type="text"
                name="city" 
                placeholder="City..." 
                value={this.state.city}
                onChange={this.handleChange}/>

		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
        );
    }
}


export default GetWeather;