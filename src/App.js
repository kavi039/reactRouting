import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Todos from './todos';
import PrivateRoute from './privateRoute';
class App extends Component {
  render() {
    return (

        <Router>
            <div className="App">
            <img src={logo} className='App-logo'/>
       <ul>
           <li><a href='/home'>Home</a></li>
           <hr/>
           <li><Link to='/home'>Home</Link></li>
               <hr/>
           <li><a href='/contact'>Contanct</a></li>
                   <hr/>
       </ul>
      <Route exact path='/home' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Todos/>
                <hr/>
                <PrivateRoute/>
        </div>

        </Router>


    );
  }
}

export default App;
