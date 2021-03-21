import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.eUmTfHIIP79yLT8jUWIk-AHaCg&pid=Api&P=0&w=455&h=154"
          alt=""
        ></img>

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
