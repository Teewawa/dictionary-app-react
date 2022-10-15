import React from "react";
import "../css/Definitions.css";
import Examples from "../component/Examples";
import Synonyms from "../Synonyms";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <h3>{props.partOfSpeechData.partOfSpeech}</h3>
      <ol>
        {props.partOfSpeechData.definitions.map(function (definition, index) {
          if (index < 3) {
            return (
              <li
                className="definitions-text"
                key={index}
              >
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

/*Definition organizes received data/props:
Part of Speech: definition(s), example(s), & synonym(s)
*/
