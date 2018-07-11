import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from 'reactstrap';
import YouTube from 'react-youtube';



class Video extends Component {


render (){
    return (
        <div className="finish">
            <div className="screen">
              <img src="http://pngimg.com/uploads/macbook/macbook_PNG55.png" />
                 <video>
                <YouTube
                    videoId={this.props.match.params.id}      
                />
                </video>
            </div>
            <ButtonGroup className="youtubeend">
                <Button color="danger"><Link to="/" >Home</Link></Button>
                <Button color="danger"><Link to="/card" >Change topic </Link></Button>
            </ButtonGroup>
        </div>
    )
}
}


export default Video