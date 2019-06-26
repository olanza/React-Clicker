import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import land from "./cards.json";
import "./App.css";

class App extends Component {
  
  state = {
    land,
    clickedItems: [],
    score: 0,
    goal: 8,
    status: ""
  };


  shuffleScoreCard = id => {
    let clickedItems = this.state.clickedItems;

    if(clickedItems.includes(id)){
      this.setState({ clickedItems: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedItems.push(id)

      if(clickedItems.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedItems: []});
        console.log('You Win');
        return;
      }

      this.setState({ land, clickedItems, score: clickedItems.length, status: " " });

      for (let i = land.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [land[i], land[j]] = [land[j], land[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Clicker</h1>
          <p className="App-intro">
            Memorization game, do not click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.land.map(puppy => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p>Made with React.</p>
        </footer>
    </div>
    );
  }
}

export default App;