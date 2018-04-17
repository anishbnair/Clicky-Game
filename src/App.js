import React, { Component } from 'react';
// import logo from './logo.svg';
import ImageCard from "./components/ImageCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';

class App extends Component {

  state = {
    images,
    currentScore: 0,
    topScore: 0,
    guessStatus: "",
    clicked: []
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Wrapper>

        <Nav
          title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          guessStatus={this.state.guessStatus}
        />

        <Title>
          Click on an image to earn points! You will loose if you click on any images more than once!
        </Title>

        <ImageCard
        />

      </Wrapper>
    );
  }
}

export default App;
