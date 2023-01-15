import React from "react";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <h1>Hi, I am a react app</h1>
    // </div>
    React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Hi, I am a React App!!!")
    )
  );
}

export default App;
