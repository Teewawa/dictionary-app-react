import React, { useState } from "react";
import "../css/Search.css";
import axios from "axios";
import Dictionary from "./Dictionary";
import Photos from "./Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [data, setData] = useState(null);
  let [ready, setReady] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [flag, setFlag] = useState(false);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setData(response.data[0]);
    searchForPhotos();
  }

  function handlePexelsResponse(response) {
    //console.log(response);
    setPhotos(response.data.photos);
  }

  //documentation: https://www.pexels.com/api/documentation/
  function searchForPhotos() {
    let pexelsApiKey =
      "563492ad6f9170000100000115e1fd75bf2b4754a12f3433f87b6133";
    let pexelsEndpoint = "https://api.pexels.com/v1/search?query=";
    let pexelsApiUrl = `${pexelsEndpoint}${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  //documentation: https://dictionaryapi.dev/s
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        alert(
          "Unable to define that word at this time. Please check the spelling or try another word. We apologize for any inconvenience. "
        );
      });
    event.target.reset();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //Display a default definition, keyword received as prop from App.js
  function displayDefault() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    searchForPhotos();
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
        <section>
          <em className="suggested-words">Example: book, sunset, kitten... </em>
        </section>

        <Photos photos={photos} />
        <Dictionary data={data} />
      </div>
    );
  }
}
