import React from "react";

export default function Examples(props) {
  console.log("out", props.definition);
  if (props.definition.example !== undefined) {
    return <div className="Examples">"{props.definition.example}"</div>;
  } else {
    return null;
  }
}
