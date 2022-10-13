import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {/*Looping through each phonetics: find audio & text */}
          <ol>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
          </ol>
        </section>

        {/*Looping through each Part of Speech Meaning(definition) */}
        {props.results.meanings.map(function (meaning, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <section>
                  <Meaning meaning={meaning} />
                </section>
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
