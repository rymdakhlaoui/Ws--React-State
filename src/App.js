import React, { Component } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Profile from "./Components/Profile";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showCounter: false
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  toggleCounter = () => {
    this.setState({ showCounter: !this.state.showCounter });
  };

  render() {
    //console.log(this.state.show);
    return (
      <div>
           <Card className="text-center">
      <Card.Header>GoMyCode</Card.Header>
      <Card.Body>
        <Card.Title>WorkShop React-State</Card.Title>
        <Card.Text>
          This project contains both of the workshop and the checkpoint React State.
        </Card.Text>
        <Button variant="primary" onClick={this.toggleCounter}>{this.state.showCounter? 'Hide Counter' : 'Show Counter'}</Button>
        <Button variant="primary" onClick={this.toggle}>{this.state.show? 'Hide Profile' : 'Show Profile'}</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Kareem Chebbi</Card.Footer>
    </Card>
    <div >

      <Row>
        <Col className="display">{this.state.showCounter && <Counter />}</Col>
        <Col className="display">{ this.state.show && <Profile />}</Col>
      </Row>
      
    </div>

      </div>
    );
  }
}
