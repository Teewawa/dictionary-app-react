import React, { useState } from "react";
import "./css/Search.css";
import axios from "axios";
import Dictionary from "./Dictionary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [data, setData] = useState(null);
  let [ready, setReady] = useState(false);

  //Display a default definition, keyword received as prop from App.js
  function displayDefault() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setData(response.data[0]);
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
    return null;
  } else {
    return (
      <div className="Search">
        <form onSubmit={search}>
          <div className="search-container">
            <input
              type="search"
              autoFocus={true}
              className="search-bar"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
            <button className="search-bttn">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
              />
            </button>
          </div>
        </form>
        <Dictionary data={data} />
      </div>
    );
  }
}
