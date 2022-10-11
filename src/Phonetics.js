import React from "react";

export default function Phonetics(props) {
  //either audio is empty or does not exist in the object (false)
  if (props.phonetic.audio === "" || "audio" in props.phonetic === false) {
    //return only the text
    return <li>{props.phonetic.text}</li>;
  } else {
    //either text is empty or does not exist in the object (false)
    if (props.phonetic.text === "" || "text" in props.phonetic === false) {
      //return only the audio
      return (
        <li>
          <a
            href={props.phonetic.audio}
            target="_blank"
            rel="noreferrer"
          >
            Listen
          </a>
        </li>
      );
      //both audio & text is within object, return both
    } else if (props.phonetic.audio && props.phonetic.text) {
      return (
        <div className="Phonetics">
          <li>
            {props.phonetic.text}{" "}
            <a
              href={props.phonetic.audio}
              target="_blank"
              rel="noreferrer"
            >
              Listen
            </a>
          </li>
        </div>
      );
    }
  }
}
