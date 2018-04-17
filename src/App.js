import React, { Component } from 'react';
// import logo from './logo.svg';
import ImageCard from "./components/ImageCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';

// Shuffle images
function randomFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    guessStatus: "",
    clicked: []
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

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
          key={friend.id}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          id={friend.id}
          image={friend.image}
        />

      </Wrapper>
    );
  }
}

export default App;
