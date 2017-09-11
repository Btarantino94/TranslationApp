import React, { Component } from 'react';
import './index.css';
import ScoreController from './ScoreController';
import ScoreBar from './ScoreBar';
import WordContainer from './WordContainer';
import Player from './Player';

const initState = {
  words: [
    { "en": "cat", "de": "Katze", "fr": "chat", "sp": "gato" },
    { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
    { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
    { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
    { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
    { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
    { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
    { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  ]
};

  let langTo   = "English";
  // console.log(langTo);
  let langFrom   = "Spanish, French, German";
  // console.log(langFrom);
  let current  = [langTo][langFrom]; 
  // keys: words in langTo, values: match words in langFrom  
  let engwords = [];
    let reverse = { "": "" };

    for(var words in current) {
        engwords.push(words);
        reverse[current[words]] = words;
    }

    let playerArray = this.state.player;
    let board = Object.assign({}, this.state.board);
    let newScore = playerArray[index].score + delta;


class App extends Component {
  constructor(){
    super();
    this.state = words;
  }
  handleAnswerClick(){
    let board = Object.assign({}, this.state.board);
    board.showAnswer = false;
    this.setState({

    })
  }

  handleScoring(index, delta){

if(newScore < 0) {newScore = 0;}
if(newScore > this.state.board.winningCount) {newScore = this.state.board.winningCount;}

    playerArray[index].score = newScore;

if(newScore === this.state.board.winningCount){
 
  board.showAnswer = false;
  //show winner
  board.winningPlayer = 'Player ' + (index + 1);


    this.setState({
      Player: playerArray,
      board: board
    });

    onButtonClick () 
    this.setState.reset();
};

};

  render() 
    const player = this.state.player.map(function(player, i){
      return (
        <Player 
        key={i} 
        stats={this.state.player[i]}
        units={this.state.board.scoreBarUnits}
        handlePlusScore={()=>{ this.handleScoring(i, 1); }}
        handleMinusScore={()=>{ this.handleScoring(i, -1); }}
        />
        );
    }, this);

    return (
      <div id="container">
        <h1>Fun Traslation Game</h1>
        <p> The only game where you learn AND have fun!</p>
        <WordContainer 
        showAnswer={this.state.board.showAnswer}
        langFrom={this.state.words[1].words}/>
        <section className="scoring">
          {player}
        </section>
      </div>
    );
  }
}
export default App;