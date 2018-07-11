import React, { Component } from 'react';
import { Card, Button,  Row, Col } from 'reactstrap';
import {
  Link
} from 'react-router-dom'



class ListVidio extends Component {

render (){
    return (
       
 <div className="margin">
           <Row>
              <Col xs="6" className="card1">
                <Card body>
                  <Button ><Link to="/list/react js">React</Link></Button>
                </Card>
              </Col>
            <Col xs="6" className="card2"> 
              <Card body>
                <Button><Link to="/list/coding garden">Coding garden </Link></Button>
              </Card>
            </Col>
            </Row>
            <Row >
            <Col xs="6" className="card3">
              <Card body>
                <Button><Link to="/list/javascript">JavaScript</Link></Button>
              </Card>
            </Col>
            <Col xs="6" className="card4">
              <Card body>
                <Button><Link to="/list/aws">AWS</Link></Button>
              </Card>
            </Col>
          </Row>
      </div>
    
    )
}
}


export default ListVidio