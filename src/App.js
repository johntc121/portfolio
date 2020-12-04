import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

import './App.css'
import ScrollToTop from './ScrollToTop';


class App extends Component {


  render(){

    return(
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Navbar />
            <div className="main-content">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/contact' component={Contact}/>
              </Switch>
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default App;
