import { faBookBookmark, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setHalaman } from "../../../app/redux/features/content/bookSlice";
import { Gap, Input, Typography } from "../../atoms";

const Header = () => {
  const dispatch = useDispatch();
  const halaman = useSelector((state) => state.book.halaman);

  return (
    <header className="flex justify-between px-8 py-4 bg-background fixed top-0 left-0 w-screen z-20">
      <div className="left-side">
        <Typography
          font="font-rubik"
          size="text-3xl"
          weight="font-semibold"
          italic="no-italic"
        >
          Book App
        </Typography>
      </div>
      <div className="right-side flex gap-6 items-center">
        <Input />
        {halaman === "home" ? (
          <Link
            to="/bookmarked"
            onClick={() => dispatch(setHalaman("bookmarked"))}
          >
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
        ) : (
          <Link to="/" onClick={() => dispatch(setHalaman("home"))}>
            <Typography
              font="font-opensans"
              size="text-normal"
              weight="font-semibold"
            >
              <FontAwesomeIcon icon={faHome} size="sm" />
              <Gap width="w-2" height="h-2" />
              Home
            </Typography>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
