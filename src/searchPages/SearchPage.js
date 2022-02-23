import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import SearchIcon from "@material-ui/icons/Search";

import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVert from "@material-ui/icons/MoreVert";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  const history = useHistory();
  const location = useLocation();

  // useEffect(() => {
  //   if (term == null || term == "") {
  //     history.push("/");
  //   }
  //   return () => {};
  // }, []);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src="/engine_view.png" alt="" />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/Images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">map</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/Tool">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds{" "}
            {data?.searchInformation?.searchTime}) for {term}
          </p>

          {data?.items &&
            data?.items.map((item, key) => (
              <div id={key} key={key} className="searchPage__result">
                <a id={key} href={item.link}>
                  <a href={item.link}>
                    {item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src && (
                        <img
                          className="seachPage__resultImage"
                          src={item.pagemap?.cse_image[0]?.src}
                          alt=""
                        />
                      )}
                  </a>
                </a>
                {item.displayLink}

                <a
                  id={key}
                  className="searchPage__resultTitle"
                  href={item.link}
                >
                  <h3 className="searchPage__resultTitle" id={key}>
                    {item.title}
                  </h3>
                </a>

                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
