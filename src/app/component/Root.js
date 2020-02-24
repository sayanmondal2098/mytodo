import React from 'react';
// import logo from '../../logo.svg';


class Root extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userId : [],
            id: [],
            title : [],
            completed: []
          }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(data => this.setState({userId: data.userId, title: data.title , id: data.id , completed: data.completed}))
    
      }
    render(){
        const {userId, title , id, completed} = this.state;
        return(
            <div className="App">
            <header className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <div>
                <h1>UserId</h1>
                {userId}
              </div>
              <div>
                <h1>completed</h1>
                {completed}
              </div>
              <div>
                <h1>Id</h1>
                {id}
              </div>
              <div>
                <h1>title</h1>
                {title}
              </div>
              
            </header>
          </div>
        );
    }
}

export default Root ;