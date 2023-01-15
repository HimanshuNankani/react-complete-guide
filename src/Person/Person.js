import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        I am {props.name}. I am {Math.floor(Math.random() * 30)} years old!
      </p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
