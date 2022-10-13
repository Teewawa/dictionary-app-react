import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [results, setResults] = useState(null);
  let [ready, setReady] = useState(false);

  //Display a default definition, keyword received as prop from App.js
  function displayDefault() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  //documentation: https://dictionaryapi.dev/s
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function () {
        alert(
          "Unable to define that word at this time. Please check the spelling or try another word. We apologize for any inconvenience. "
        );
      });
    event.target.reset();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //Conditional Rendering to prevent repeated API call on initial search
  if (ready === false) {
    displayDefault();
    setReady(true);
    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            className="form-control"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            className="form-control"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
        </form>
        <Results results={results} />
      </div>
    );
  }
}
