import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Home from "./app/component/Home";
import Root from "./app/component/Root";
import User from "./app/component/User";
import Weather from "./app/component/Weather";

import ErrorPage from './app/ui/ErrorPage';
import Footer from './app/ui/Footer';

import Navigation from './app/route/Navigation';

import './App.css';

class App extends React.Component {
  render(){
    return (

      <BrowserRouter>
      <Navigation />
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/user" component={User}/>
      <Route path="/root" component={Root}/>
      <Route path="/weather" component={Weather}/>
      <Route component={ErrorPage} />
      </Switch>
      <Footer />
      </BrowserRouter>
  );
  }
}

export default App;
