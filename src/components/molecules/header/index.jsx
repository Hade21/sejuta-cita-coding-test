import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Gap, Typography } from "../../atoms";

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-4 bg-background fixed top-0 left-0 w-screen">
      <div className="left-side">
        <Typography
          font="font-rubik"
          size="text-2xl"
          weight="font-semibold"
          italic="no-italic"
        >
          Book App
        </Typography>
      </div>
      <div className="right-side">
        <Link to="/boomarked">
          <Typography
            font="font-opensans"
            size="text-normal"
            weight="font-semibold"
          >
            <FontAwesomeIcon icon={faBookBookmark} size="sm" />
            <Gap width="w-2" height="h-2" />
            Bookmarked
          </Typography>
        </Link>
      </div>
    </header>
  );
};

export default Header;
