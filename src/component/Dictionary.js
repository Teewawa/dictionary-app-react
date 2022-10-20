import React from "react";
import "../css/Dictionary.css";
import Phonetics from "./Phonetics";
import Definitions from "./Definitions";

export default function Dictionary(props) {
  if (props.data) {
    return (
      <div className="Dictionary">
        <section>
          <h2>{props.data.word}</h2>

          {/*Looping through each phonetics: find audio & text */}
          <ol className="phonetics-list">
            {props.data.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
          </ol>
        </section>

        {/*Looping through each Part of Speech Meaning(definition) */}
        {props.data.meanings.map(function (definition, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <section>
                  <Definitions partOfSpeechData={definition} />
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
