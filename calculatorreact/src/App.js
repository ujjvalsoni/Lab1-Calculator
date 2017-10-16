import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div className="well">

          <form method = "POST" action = "http://localhost:4000/operation">
              Number 1:
              <input type="number" name="num1"/>
              Number 2:
              <input type="number" name="num2"/>
              <p>Answer:</p>
              <input type="submit" value="+" formaction="http://localhost:4000/add"/>
              <input type="submit" value="-" formaction="http://localhost:4000/sub"/>
              <input type="submit" value="/" formaction="http://localhost:4000/div"/>
              <input type="submit" value="*" formaction="http://localhost:4000/mul"/>
          </form>

      </div>
    );
  }
}

export default App;
