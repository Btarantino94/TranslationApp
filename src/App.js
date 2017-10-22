import React, { Component } from 'react';//import React from 'react' is the above is a default import. 
//brings in the main React library so we can start work.
//component is composed of layout code and behavoral code.
import './App.css';
//The const declaration creates a read-only reference to a value.
const initState = {
  // The initstate() function allows a state array, pointed to by the state argument, to be initialised for future use. 
  firstLanguage: 'english',
  secondLanguage: 'english',
  index: 0,
  currentGuess: '',
  guessedWord: '',
  words: [
  //I have some data called words which is an array containing objects.
    {
      "english": "cat",
      "latin": "feles",
      "japanese": "ネコ(Neko)",
      "filipino": "pusa",
      "italian": "gatto"
    },
    {"english": "dog", "latin": "canis", "japanese": "犬(Inu)", "filipino": "aso", "italian": "cane" },
    {"english": "man", "latin": "homine", "japanese": "おとこ(O toko)", "filipino": "lalaki", "italian": "uomo" },
    {"english": "woman", "latin": "femina", "japanese": "女性(Josei)", "filipino": "babae", "italian": "donna" },
    {"english": "boy", "latin": "puer", "japanese": "男の子(Otokonoko)", "filipino": "batang lalaki", "italian": "ragazzo" },
    {"english": "girl", "latin": "puella", "japanese": "女の子(On'nanoko)", "filipino": "batang babae", "italian": "ragazza" },
    {"english": "house", "latin": "villa", "japanese": "家(le)", "filipino": "bahay", "italian": "casa" },
    {"english": "car", "latin": "currus", "japanese": "車(Kuruma)", "filipino": "kotse", "italian": "auto" },
    {"english": "plane", "latin": "planum", "japanese": "飛行機(Hikōki)", "filipino": "eroplano", "italian": "aereo" },
    {"english": "butterfly", "latin": "papilionem", "japanese": "バタフライ(Batafurai)", "filipino": "butterfly(or paruparo)", "italian": "farfalla" },
  ],
  wordsRemaining: [
    {
      "english": "cat",
      "latin": "feles",
      "japanese": "ネコ(Neko)",
      "filipino": "pusa",
      "italian": "gatto"
    },
    {"english": "dog", "latin": "canis", "japanese": "犬(Inu)", "filipino": "aso", "italian": "cane" },
    {"english": "man", "latin": "homine", "japanese": "おとこ(O toko)", "filipino": "lalaki", "italian": "uomo" },
    {"english": "woman", "latin": "femina", "japanese": "女性(Josei)", "filipino": "babae", "italian": "donna" },
    {"english": "boy", "latin": "puer", "japanese": "男の子(Otokonoko)", "filipino": "batang lalaki", "italian": "ragazzo" },
    {"english": "girl", "latin": "puella", "japanese": "女の子(On'nanoko)", "filipino": "batang babae", "italian": "ragazza" },
    {"english": "house", "latin": "villa", "japanese": "家(le)", "filipino": "bahay", "italian": "casa" },
    {"english": "car", "latin": "currus", "japanese": "車(Kuruma)", "filipino": "kotse", "italian": "auto" },
    {"english": "plane", "latin": "planum", "japanese": "飛行機(Hikōki)", "filipino": "eroplano", "italian": "aereo" },
    {"english": "butterfly", "latin": "papilionem", "japanese": "バタフライ(Batafurai)", "filipino": "butterfly(or paruparo)", "italian": "farfalla" },
  ],
  completedWords: []
}
// variable for wordsleft
let wordsLeft;
//extending class component
class App extends Component {
  //The constructor is to initialize state. 
  //If you don’t initialize state and you don’t bind methods, 
  //you don’t need to implement a constructor for your React component.
  constructor(){
    super();
    //.bind changes what "this" is referencing.
    this.onChangeFrom = this.onChangeFrom.bind(this);
    // When you bind functions to events, your input variables will be 
    //called first and then you will get whatever the API of the event is defined to return.
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeCurrentGuess = this.onChangeCurrentGuess.bind(this);
    this.onClickGuess = this.onClickGuess.bind(this);
    this.currentWord = this.currentWord.bind(this);
    this.reset = this.reset.bind(this);
    this.state = initState;
  }

  onChangeFrom(event) {
    //event.target is a browser event property
    let firstLanguage = event.target.value;
    // Object.assign() method is used to copy the values of all enumerable 
    //own properties from one or more source objects to a target object. It will return the target object.
    //enumerable means able to be counted by one-to-one correspondence with the set of all positive integers.
    let newState = Object.assign({}, this.state);
    newState.firstLanguage = firstLanguage;
    //setState() makes changes to the component state and tells React 
    //that this component and its children need to be re-rendered with the updated state. 
    this.setState(newState);
  }

  onChangeTo(event) {
    let secondLanguage = event.target.value;
    let newState = Object.assign({}, this.state);
    newState.secondLanguage = secondLanguage;
    this.setState(newState);
  }

  onChangeCurrentGuess(event) {
    let currentGuess = event.target.value;
    let newState = Object.assign({}, this.state);
    newState.currentGuess = currentGuess;
    this.setState(newState);
  }

  onClickGuess(){
    let currentGuess = this.state.currentGuess;
    let newState = Object.assign({}, this.state);
    let secondLanguage = this.state.secondLanguage;
    let index = newState.index;
    let wordsRemaining = this.state.wordsRemaining;
    let firstLanguage = this.state.firstLanguage;
    let targetGuess = newState.words[index][secondLanguage].toLowerCase();
    newState.guessedWord = currentGuess.trim().toLowerCase();
    if (newState.guessedWord === targetGuess ){
      alert("Perfect!");
      newState.completedWords.push(targetGuess);
      wordsLeft += " " + wordsRemaining[index][firstLanguage] + " ";
      newState.wordsRemaining.splice(index, 1);
      index = (newState.index+1)
      if(index === 11){
        index = 0;
      }
      console.log(index);
    }else {
      alert("Please Try again");
    }

    newState.index = index;
    newState.currentGuess = '';
    this.setState(newState)
  }

  reset(){
    let newState = Object.assign({}, this.state);
    newState = initState;
    wordsLeft = '';
    this.setState(newState);
  }

  currentWord(){
    let index = this.state.index;
    let wordList = this.state.words;
    let wordsRemaining = this.state.wordsRemaining;
    let firstLanguage = this.state.firstLanguage;
    let secondLanguage = this.state.secondLanguage;

// used unicode for the arrows in h2
    return(

      <div className="Con">

        <h2>{firstLanguage} &#8594; {secondLanguage}</h2>

        <div className="wordsLeft">
        {firstLanguage}: {wordList[index][firstLanguage]}
        </div>

        <div className="wordsMiddle">
        {this.state.secondLanguage}: <input type="text" value={this.state.currentGuess} onChange={this.onChangeCurrentGuess}/> <button onClick={this.onClickGuess}>Guess</button>
        </div>

        <div className="wordsRight">
        <p>Words Guessed:</p>
        <p>{wordsLeft}</p>
        <button onClick={this.reset}>Reset</button>
        </div>

      </div>
    )
  }

// The render() method is required.
// The render() does not modify component state, it returns the same result each time it’s invoked, 
//and it does not directly interact with the browser.
  render() {
    return (
      <div className="App">
        <h1>Ready to Learn a new Language?</h1>

        <div className="language">
          <h2>Please Select Languages here:</h2>
          <h3>From</h3>
          <select onChange={this.onChangeFrom}>
            <option value="english">English</option>
            <option value="latin">Latin</option>
            <option value="japanese">Japanese</option>
            <option value="filipino">Filipino</option>
            <option value="italian">Italian</option>
          </select>
          <h3>To</h3>
          <select onChange={this.onChangeTo}>
            <option value="english">English</option>
            <option value="latin">Latin</option>
            <option value="japanese">Japanese</option>
            <option value="filipino">Filipino</option>
            <option value="italian">Italian</option>
          </select>
        </div>

        <this.currentWord />

      </div>
    );
  }
}

export default App;

// <!-- Create a vocabulary study app that allows users to select a language and then get a series of flashcards of words. The user must be able to write the translation of the word and the app will tell them if they are right or wrong. If they are wrong, the correct translation must be shown. Allow the user to loop through the deck as many times as necessary until they get them all correct. Allow the user to reset at any time.
//
// Step 1:
// Ask user which language they would like to show on the cards and then ask what language they will be translating to.
//
// Step 2:
// Show user the first word and provide an input to have them type the translation & submit.
//
// Step 3:
// Evaluate the answer. Make sure that you account for extra white spaces at the beginning or end of the submitted word and also make your evaluation case insensitive. In other words, "TEST", " Test " and "test" would all be evaluated the same.
//
// Step 4:
// If the user gets the answer correct, take the word out of the deck for this round and show the user how many words correct out of how many words in the deck.
//
// Step 5:
// When the user has gotten all words correct, congratulate them and ask if they want to reset.
//
// Step 6:
// The user should be able to reset to Step 1 at any time. -->