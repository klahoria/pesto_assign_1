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
import useGoogleSearch from "./useGoogleSearch";
import axios from "axios";
function Search({ hideButtons = false }) {
  const [data1, dispatch] = useStateValue();
  const [data2, setData2] = useState();
  const [showData2, setshowData2] = useState(false);

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setData2(res.data);
    });
  };

  useEffect(() => {
    console.log(data1);
    getData();

    if (data1.term == null) {
      setInput("");
    } else {
      setInput(data1.term);
    }
  }, []);

  const [input, setInput] = useState("");
  const [Afill, setAfill] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const search = (e) => {
    e.preventDefault();
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

  const handleChange = (e) => {
    e.preventDefault();
    getData();
    setInput(e.target.value);
    // console.log(data);
    // setAfill(data.items);
    // let link = ` https://www.googleapis.com/customsearch/v1?key=AIzaSyBAeR2mckJgvnCwvPS56KCkqVilp98kumM&cx=d112155f7596fd999:omuauf_lfve&q=${e.target.value}&callback=hndlr`;
    // axios.get(link).then((response) => {
    //   console.log(response);
    // });
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
      <div className="search__input" style={{ position: "relative" }}>
        <SearchIcon className="search__inputIcon" />
        <input
          onChange={(e) => handleChange(e)}
          value={input}
          onFocus={() => {
            getData();
            setshowData2(!showData2);
          }}
          onBlur={() => {
            setTimeout(() => {
              setshowData2(!showData2);
            }, 200);
          }}
        />
        <MicIcon />
        <div class="autofill_blank">
          {data2 &&
            showData2 &&
            input !== "" &&
            data2
              ?.filter((item) => {
                return item.title.indexOf(input) !== -1;
              })
              .map((item, index) => {
                return (
                  index < 6 && (
                    <div
                      onClick={() => {
                        setInput(item.title);
                      }}
                      style={{
                        display: "flex",
                        // border:'1px solid',
                        height: "max-content",
                        backgound: "white",
                        boxShadow: "1px 2px  10px 0px",
                        cursor: "pointer",
                      }}
                    >
                      <SearchIcon
                        className="a_fill_item search__inputIcon"
                        onClick={() => {
                          setInput(item.title);
                        }}
                      />
                      <span
                        class="a_fill_item"
                        onClick={() => {
                          setInput(item.title);
                        }}
                      >
                        <span style={{ color: "#4285f4" }}>
                          {item.title.split(item.title.indexOf(input))[0]}
                        </span>
                        <span>
                          {item.title.split(item.title.indexOf(input))[1]}
                        </span>
                      </span>
                    </div>
                  )
                );
              })}
        </div>
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
