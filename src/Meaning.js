import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {index}. {definition.definition}
            </p>
            <em>{definition.example}</em>
          </div>
        );
      })}
      <p>{props.meaning.synonyms}, </p>
    </div>
  );
}
