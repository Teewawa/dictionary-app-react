import React from "react";

export default function Phonetics(props) {
  if (props.phonetic.audio === "") {
    return <li>{props.phonetic.text}</li>;
  } else {
    if (props.phonetic.text === "" || props.phonetic.text === "undefined") {
      return null;
    } else if (props.phonetic.audio && props.phonetic.text) {
      return (
        <div className="Phonetics">
          <li>
            {props.phonetic.text}{" "}
            <a
              href={props.phonetic.audio}
              target="_blank"
            >
              Listen
            </a>
          </li>
        </div>
      );
    }
  }
}
