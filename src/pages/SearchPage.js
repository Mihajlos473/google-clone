import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../datalayer/StateProvider";
import { useGoogleSearch } from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //   Live API call
  const { data } = useGoogleSearch(term);

  //   Mock API call
  //   const data = Response;

  //   console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://tse4.mm.bing.net/th?id=OIP.eUmTfHIIP79yLT8jUWIk-AHaCg&pid=Api&P=0&w=455&h=154"
            alt=""
          ></img>
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div class="searchPage__optionsLeft">
              <div class="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div class="searchPage__option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div class="searchPage__option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div class="searchPage__option">
                <LocalOfferIcon />
                <Link to="/all">shopping</Link>
              </div>
              <div class="searchPage__option">
                <RoomIcon />
                <Link to="/all">maps</Link>
              </div>
              <div class="searchPage__option">
                <MoreVertIcon />
                <Link to="/all">more</Link>
              </div>

              <div class="searchPage__optionsRight">
                <div class="searchPage__option">
                  <Link to="/settings">Settings</Link>
                </div>
                <div class="searchPage__option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div class="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink} ∆
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
