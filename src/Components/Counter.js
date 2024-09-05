import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class Counter extends Component {
    // State Init
    constructor(props) {
        console.log('State init')
        super(props);
        this.state = {count : 0};
    }

    //State Update
    increment = () =>{
        this.setState({count: this.state.count +1})
    }

    decrement = () =>{
        this.setState({count: this.state.count>0 ? this.state.count-1 : this.state.count})
    }

    componentDidMount() {
        console.log('Component did mount')
    }

    componentDidUpdate() {
        console.log('Component did updating')
    }

    componentWillUnmount() {
        console.log('Component Will unmount')
    }

    reset = () => {
      this.setState({count: 0})
    }

  render() {
    console.log('Component rendring')
    return (
      <div>
        <h1>Counter</h1>
        <Button variant='success' onClick={this.increment}> Increment +1 </Button>
        <Button variant='light'>{this.state.count}</Button>
        <Button variant='danger' onClick={this.decrement}> Decrement -1 </Button>
        <Button onClick={this.reset}>Reset</Button>
      </div>
    )
  }
}
