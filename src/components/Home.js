import { Grid } from "@mui/material";
import React from "react";
import { SET_SEARCH_TERM } from "../store/actions";
import { LOGIN } from "../store/actions/type";
import { AuthGainer, useStateValue } from "../store/AuthGaurd/AuthContext";
import SearchBar from "./SearchBar";

function Home() {
  const [data, dispatch] = useStateValue();

  const changetoken = async () => {
    // dispatch({
    //   type: LOGIN,
    //   value: { name: "kumar", token: Math.random(20) },
    // });
    const data = await SET_SEARCH_TERM();
    console.log(data);
    try {
      dispatch({
        type: LOGIN,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div>
    //   <button onClick={changetoken}>{"login"}</button>

    //   {JSON.stringify(data.term)}
    // </div>
    <Grid  style={{ height: "500px",marginTop:'100px' }}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        style={{ height: "200px" }}
      >
        <img src="engine_view.png" alt="" />
      </Grid>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
    </Grid>
  );
}

export default Home;
