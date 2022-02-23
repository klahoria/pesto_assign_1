import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { useStateValue } from "../store/AuthGaurd/AuthContext";
import axios from "axios";

function SearchBar() {
  const [data, dispatch] = useStateValue();

  useEffect(() => {}, []);

  //  search state value
  const [searchValue, SetSearchValue] = React.useState([]);

  const searchData = (e) => {
    let link = `https://serpapi.com/search.json?engine=google_autocomplete&q=${e}&hl=en&gl=us&api_key=${data.token}`;

    var config = {
      method: "get",
      url: link,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch({
          type: "SEARCH",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Grid container spacing={2} display={"flex"} justifyContent="center">
      <Grid item xs={6} md={4} sm={6} style={{ minWidth: "500px" }}>
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
              style={{
                width: "100%",
                outline: "none",
                border: "none",
                fontSize: "18px",
              }}
              onKeyDown={(e) => {
                searchData(e.target.value);
              }}
            />
          </div>
        </div>
        {
          <div className="show_data" style={{ width: "100%" }}>
            {data?.searchResult?.map((items) => {
              return JSON.stringify(items);
            })}
          </div>
        }
      </Grid>
    </Grid>
  );
}

export default SearchBar;
