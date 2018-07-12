import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";
import YouTube from "react-youtube";

class Video extends Component {
  render() {
    return (
      <div className="finish">
        <ButtonGroup className="youtubeend">
          <Button color="danger">
            <Link to="/">Home</Link>
          </Button>
          <Button color="danger">
            <Link to="/card">Change topic </Link>
          </Button>
        </ButtonGroup>
        <div className="screen">
          <div className="wrapper">
            <img src="http://pngimg.com/uploads/macbook/macbook_PNG55.png" />
            <YouTube className="youtube-video" videoId={this.props.match.params.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
