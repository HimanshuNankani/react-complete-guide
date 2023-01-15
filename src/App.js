import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <p>This is really working</p>
      <Person name="Himanshu" />
      <Person name="Max"> My hobby is playing cricket.</Person>
    </div>
    // React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I am a React App!!!")
    // )
  );
}

export default App;
