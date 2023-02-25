import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hello Bena.",
    };
  }

  render() {
    const handleClick = () => {
      this.setState({ string: "Am fine" });
    };

    return (
      <div>
        <h1>{this.state.string}</h1>
        <button onClick={handleClick}>change text</button>
      </div>
    );
  }
}

export default App;
