import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {/*Phonetics, how to separate text & audio results */}
        <h3>{props.results.phonetic}</h3>
        {/*Looping through each meaning */}
        {props.results.meanings.map(function (meaning, index) {
          if (index < 4) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
