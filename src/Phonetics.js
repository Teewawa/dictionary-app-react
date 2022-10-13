import React from "react";
import audioIcon from "./icons/audio-icon.png";
import "./Phonetics.css";

export default function Phonetics(props) {
  let audio = new Audio("");

  const start = () => {
    audio.play();
  };

  //either audio is empty or does not exist in the object (false)
  if (props.phonetic.audio === "" || "audio" in props.phonetic === false) {
    //return only the text
    return <li class="phonetic-text">{props.phonetic.text}</li>;
  } else {
    //either text is empty or does not exist in the object (false)
    if (props.phonetic.text === "" || "text" in props.phonetic === false) {
      //return only the audio
      audio = new Audio(props.phonetic.audio);
      return (
        <li>
          {"   "}
          <button
            className="phonetic-audio-bttn"
            onClick={start}
          >
            <img
              className="phonetic-audio-icon"
              src={audioIcon}
              alt="Phonetic audio icon"
            />
          </button>
        </li>
      );
      //both audio & text is within object, return both
    } else if (props.phonetic.audio && props.phonetic.text) {
      audio = new Audio(props.phonetic.audio);
      return (
        <div className="Phonetics">
          <li>
            <span class="phonetic-text">{props.phonetic.text}</span>{" "}
            <button
              className="phonetic-audio-bttn"
              onClick={start}
            >
              <img
                className="phonetic-audio-icon"
                src={audioIcon}
                alt="Phonetic audio icon"
              />
            </button>
          </li>
        </div>
      );
    }
  }
}
