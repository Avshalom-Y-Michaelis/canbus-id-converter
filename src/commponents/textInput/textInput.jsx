
import "./textInput.css"
import React from "react";

export default function TextInput({propertySetFunc, title}) {
  return (
    <div className="text-input" >
      <div>{title}</div>
      <input onChange={(event) => propertySetFunc(event.target.value)}></input>
      
    </div>
  );
}