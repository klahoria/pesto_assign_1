import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../searchPages/Search";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home__header">
          <div className="home__headerLeft">
            <Link to="/search">Store</Link>
            <Link to="/about">About</Link>
          </div>

          <div className="home__headerRight">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <AppsIcon />
            <Avatar />
          </div>
        </div>

        <div className="home__body">
          <img title="image-google" src={require("../engine_view.png")} />

          <div className="home__inputContainer">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
