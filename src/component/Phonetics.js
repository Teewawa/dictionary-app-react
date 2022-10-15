import React from "react";
import "../css/Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  let audio = new Audio("");

  const start = () => {
    audio.play();
  };

  //either audio is empty or does not exist in the object (false)
  if (props.phonetic.audio === "" || "audio" in props.phonetic === false) {
    //return only the text
    return <li className="phonetic-text">{props.phonetic.text}</li>;
  } else {
    //either text is empty or does not exist in the object (false)
    if (props.phonetic.text === "" || "text" in props.phonetic === false) {
      //return only the audio
      audio = new Audio(props.phonetic.audio);
      return (
        <li className="phonetic-text">
          {"   "}
          <button
            className="phonetic-audio-bttn"
            onClick={start}
          >
            <FontAwesomeIcon icon={faVolumeHigh} />
          </button>
        </li>
      );
      //both audio & text is within object, return both
    } else if (props.phonetic.audio && props.phonetic.text) {
      audio = new Audio(props.phonetic.audio);
      return (
        <div className="Phonetics">
          <li className="phonetic-text">
            {props.phonetic.text}{" "}
            <button
              className="phonetic-audio-bttn"
              onClick={start}
            >
              <FontAwesomeIcon icon={faVolumeHigh} />
            </button>
          </li>
        </div>
      );
    }
  }
}
