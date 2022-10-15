import React from "react";
import "../css/Synonyms.css";

export default function Synonyms(props) {
  if (props.definition.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <em>Synonyms: </em>
        {props.definition.synonyms.map(function (synonym, index) {
          return (
            <span
              className="synonym-box"
              key={index}
            >
              {synonym}{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
