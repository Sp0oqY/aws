import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <header>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Exercises</li>
            <li>Meals</li>
            <li>Supplements</li>
            <li>Contact</li>
          </ul>
        </header>
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
      </div>
    )
  }
}

export default App;
