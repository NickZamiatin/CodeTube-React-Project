import React, { Component } from 'react';
import './App.css';
import LoadingPage from './LoadingPage'
import CardVidio from './CardVidio'
import ListVideo from './ListVideo'
import Vidio from './Vidio'
import {Switch , Route} from "react-router-dom"

const NotFound = () => <h1>NotFound</h1>

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: "black" }}>
       <div className="main">
         <Switch>
            <Route exact path='/' component={LoadingPage}/>
            <Route path='/card'  component={CardVidio}/>
            <Route path='/list/:term' component={ListVideo}/>
            <Route path='/video/:id'   component={Vidio}/>
            <Route path='*'   component={NotFound}/>
         </Switch>
         </div>
      </div>
    );
  }
}

export default App;


// https: //codetubeproject.now.sh/video/GyCD--1v8w0      url now  !!!!

