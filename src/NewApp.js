import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class NewApp extends Component {
  state = {
    persons: [{ name: "Rob" }, { name: "Himanshu" }, { name: "Roxy" }],
  };

  switchNameHandler = (newName) => {
    console.log("Was clicked");
    //DON"T DO THIS:   this.state.persons[0].name = "Maxmiian";
    this.setState({
      persons: [{ name: newName }, { name: "Himanshu N" }, { name: "Roxxein" }],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler("Robby")}>
          Switch Names
        </button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name} />
        <Person
          name={this.state.persons[2].name}
          click={this.switchNameHandler.bind(this, "Robert")}
        >
          My hobby is playing cricket.
        </Person>
      </div>
    );
  }
}

export default NewApp;
