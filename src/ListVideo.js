import {
  Link
} from 'react-router-dom'

import React, {
  Component
} from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Col
} from 'reactstrap';


class ListVideo extends Component {

  constructor() {
    super();
    this.state = {
      resultVideo: []
    }
  }

  componentDidMount() {
    const searchWord = this.props.match.params.term;
    console.log(searchWord)
    let API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchWord}&type=video&maxResults=12&key=AIzaSyA81yLbQdfLtuusbrxBZAOl0s1Kgx8gGMI`
    fetch(API_URL)
      .then(res => res.json())
      .then(result => {

        this.setState({
          resultVideo : result.items
        })
        console.log(this.state.resultVideo)
      })
    }
    
    
    render(){
    return (
    <div>
     <CardGroup>
    {this.state.resultVideo.map(result =>{
      {/* console.log(result.id.videoId) */}
        return (<Col xs="4" key={result.id.videoId}>
          <Card >
        <CardImg top width="100%" src={result.snippet.thumbnails.high.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{result.snippet.channelTitle}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{result.snippet.title}</CardText>
          <Button color="danger"><Link to={`/video/${result.id.videoId}`} >Lets see</Link></Button>
        </CardBody>
      </Card>
      </Col>)
    })}
      </CardGroup>
    </div>
    
    )
}
}

export default ListVideo