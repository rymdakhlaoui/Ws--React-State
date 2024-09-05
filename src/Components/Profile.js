import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Kareem Chebbi",
        bio: "Hi, I’m Kareem! I’m a web developer with in-depth experience in React Js development. In a nutshell, I create websites that help organizations address business challenges and meet their needs. I manage everything from website navigation and layout to a company’s web hosting and security architecture",
        imgSrc:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        profession: "Web Developer",
      },
      count:0
    };
  }


  componentDidMount(){
    setInterval(()=>{
        this.setState(prevState=>({
            count: prevState.count+0.5
        }))
      },1000)
}

  render() {
    return (
      <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.state.person.imgSrc} />
      <Card.Body>
        <Card.Title>{this.state.person.fullName}</Card.Title>
        <Card.Text>{this.state.person.bio}</Card.Text>
        <Card.Text>{this.state.person.profession}</Card.Text>
      </Card.Body>
    </Card>
        <h2>{this.state.count} Sec...</h2>
      </div>
    )
  }
}
