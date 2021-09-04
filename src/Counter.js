import './App.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import React, { Component } from "react";
import fatma from './image.jpg'
class Counter extends Component {
  state = { fullName:"Brahmi Fatma",
  profession:"Développeur web ",   
  Src:fatma,
  bio:"Le développement web est apparu avec l'avènement d'internet. Dans un secteur digital en pleine expansion, c'est une compétence très recherchée par les entreprises actuellement. La mission du développeur est d'être capable de créer et de développer un site web ou une application mobile.",
    count: 0,
    int: 0,
  };
  componentDidMount() {
    console.log("componentDidMount()");
    const int = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    this.setState({ int });
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.int);
  } 
  render() {
    return <div className='bag-item'>
        
    <img className="image" src={this.state.Src }  style={{width: '20rem',
         borderRadius: '50px', height: '20rem',}}
         alt="photoprofile"/> 
         <h1 className="title">{this.state.fullName}</h1> 
  <p className="paragraphe">{this.state.profession}</p>
    <p className="paragraphe">{this.state.bio}</p>
    <div className='time'>
    <p> <AccessTimeIcon/> Time: {this.state.count}</p></div></div>;
  }
}

export default Counter