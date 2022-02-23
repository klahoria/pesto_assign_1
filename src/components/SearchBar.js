import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { useStateValue } from "../store/AuthGaurd/AuthContext";
import axios from "axios";
import './main.css'
function SearchBar() {
  const [data, dispatch] = useStateValue();
  const [values, setValues] = React.useState([]);
  const [UserSearch, setUserSearch] = React.useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    let link = `https://jsonplaceholder.typicode.com/todos/`;

    var config = {
      method: "get",
      url: link,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setValues(response.data);
        dispatch({
          type: "SEARCH",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const searchData = (e) => {
    setSearchField(e);
    setUserSearch(
      values.filter((item) => {
        return item.title.indexOf(e) !== -1;
      })
    );
  };

  useEffect(() => {
    console.log(UserSearch);
  }, [UserSearch]);
  return (
    <Grid container spacing={2} display={"flex"} justifyContent="center">
      <Grid item xs={6} md={6} sm={6} style={{ minWidth: "500px" }}>
        <div
          className="search_outer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid",
            padding: "10px",
            borderRadius: "50px",
          }}
        >
          <SearchIcon style={{ fontSize: "24px", padding: "0px 3px" }} />
          <div
            style={{
              padding: "0px 10px",
              width: "98%",
              boxSizing: "border-box",
            }}
          >
            <input
              type="text"
              value={searchField}
              style={{
                width: "100%",
                outline: "none",
                border: "none",
                fontSize: "18px",
              }}
              onChange={(e) => {
                searchData(e.target.value);
              }}
            />
          </div>
        </div>
        {UserSearch.length > 0 && (
          <div
            className="show_data"
            style={{
              width: "95%",
              height: "300px",
              overflowY: "scroll",
              overflowX: "hidden",
              position: "relative",
              marginLeft: "14px",
            }}
          >
            {UserSearch.map((items, index) => {
              return (
                <>
                  {/* {index == 0 && (
                    <div
                      style={{
                        width: "100%",
                        padding: "0px 15px",
                        position:"sticky"
                        top:"0px"
                      }}
                    >
                      <hr />
                    </div>
                  )} */}
                  {items.title !== searchField && <div
                    style={{
                      width: "100%",
                      padding: "10px 0px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      searchData(items.title);
                    }}
                  >
                    <SearchIcon
                      style={{ fontSize: "24px", padding: "0px 3px" }}
                    />
                    <span style={{ padding: "0px 10px", fontWeight: 700 }}>
                      {items.title}
                    </span>
                  </div>}
                </>
              );
            })}
          </div>
        )}
      </Grid>
    </Grid>
  );
}

export default SearchBar;
