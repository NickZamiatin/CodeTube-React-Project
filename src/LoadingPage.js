import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Button
} from 'reactstrap';

class LoadingPage extends Component {

render (){
    return (
        <div className="loading">
         <Button   className="youtubebut"  color="danger"><Link to="/card">CodeTube </Link></Button>
             </div>
     )
    }
}


export default LoadingPage