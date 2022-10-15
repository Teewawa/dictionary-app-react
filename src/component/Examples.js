import React from "react";

export default function Examples(props) {
  if ("example" in props.definition === true) {
    return <div className="Examples">"{props.definition.example}"</div>;
  } else {
    return null;
  }
}
