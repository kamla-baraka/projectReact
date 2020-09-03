import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Contact from './component/Contact'
import Index from './component/Index';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index}></Route>
        <Route path='/contact' component={Contact}></Route>
      </BrowserRouter>
    );
  }
  
}

export default App;
