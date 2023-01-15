import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        I am {props.name}. I am {Math.floor(Math.random() * 30)} years old!
      </p>
      <p onClick={props.click}>{props.children}</p>
    </div>
  );
};

export default person;
