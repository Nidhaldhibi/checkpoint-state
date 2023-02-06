import React, { Component } from "react";
import "./App.css";
import Counter from "./components/TimeInterval";
import photo from "./components/nidhal.jpg";

class App extends Component {
  state = {
    fullName: "DHIBI Nidhal",
    bio: "java script full stack developer,part of team hackerspace Gafsa",
    imgSrc: { photo },
    show: false,
  };
  toggleVisibility = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleVisibility}>show</button>
        {this.state.show ? (
          <div>
            <h1>{this.state.fullName}</h1>
            <p>{this.state.bio}</p>
            <img src={photo} alt="nidhal.jpg" />
          </div>
        ) : (
          <p> button show </p>
        
        )}
        <Counter />
      </div>
    );
  }
}

export default App;
