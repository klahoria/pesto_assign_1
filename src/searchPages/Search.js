import React, { useEffect, useState } from "react";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import reducer from "../reducer";

import { SET_SEARCH_TERM } from "../actions/type";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function Search({ hideButtons = false }) {
  const [data, dispatch] = useStateValue();

  useEffect(() => {
    console.log(data);
    if (data.term == null) {
      setInput("");
    } else {
      setInput(data.term);
    }
  }, []);

  const [input, setInput] = useState("");
  const history = useHistory();
  const location = useLocation();

  const search = (e) => {
    e.preventDefault();
    console.log("enter pressed", input);
    if (input == "") {
      return;
    }
    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
    if (location.pathname !== "/search") {
      history.push("/search");
    }
  };
  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        // console.log(input);
        search(e);
      }}
    >
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <MicIcon />
      </div>
      <button type="subimt" style={{ display: "none" }}></button>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            type="submit"
            className="search__buttonsHidden"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
