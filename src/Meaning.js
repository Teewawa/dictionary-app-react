import React from "react";
import "./Dictionary.css";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <ol>
        {props.meaning.definitions.map(function (definition, index) {
          if (index < 3) {
            return (
              <li key={index}>
                {" "}
                {definition.definition}
                <Examples definition={definition} />
                <Synonyms definition={definition} />
              </li>
            );
          } else {
            return null;
          }
        })}
      </ol>
    </div>
  );
}
