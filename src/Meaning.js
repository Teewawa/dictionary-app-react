import React from "react";
import "./Dictionary.css";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              {index + 1}. {definition.definition}
              <Examples definition={definition} />
              <Synonyms definition={definition} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
