import {
  faBars,
  faBookBookmark,
  faHome,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setHalaman,
  setSearch,
} from "../../../app/redux/features/content/bookSlice";
import { Gap, Input, Typography } from "../../atoms";

const Header = () => {
  const dispatch = useDispatch();
  const halaman = useSelector((state) => state.book.halaman);
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", setWidth(window.innerWidth));
    };
  }, [width]);

  const menu = (
    <div className="wrapper flex gap-6 items-center">
      <Input
        px="lg:px-4 px-2"
        py="lg:py-2 py-1"
        size="lg:text-base text-xs"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      {halaman === "home" ? (
        <Link
          to="/bookmarked"
          onClick={() => dispatch(setHalaman("bookmarked"))}
        >
          <Typography
            font="font-opensans"
            size="lg:text-base text-xs"
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
            size="lg:text-base text-xs"
            weight="font-semibold"
          >
            <FontAwesomeIcon icon={faHome} size="sm" />
            <Gap width="w-2" height="h-2" />
            Home
          </Typography>
        </Link>
      )}
    </div>
  );
  const mobileMenu = (
    <div className="wrapper fixed top-14 right-0 flex flex-col justify-center gap-4 w-full bg-background px-4 py-2 rounded-lg">
      <Input
        px="lg:px-4 px-2"
        py="lg:py-2 py-1"
        size="lg:text-base text-xs"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      {halaman === "home" ? (
        <Link
          to="/bookmarked"
          onClick={() => dispatch(setHalaman("bookmarked"))}
        >
          <Typography
            font="font-opensans"
            size="lg:text-base text-xs"
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
            size="lg:text-base text-xs"
            weight="font-semibold"
          >
            <FontAwesomeIcon icon={faHome} size="sm" />
            <Gap width="w-2" height="h-2" />
            Home
          </Typography>
        </Link>
      )}
    </div>
  );
  const icon = (
    <div className="wrapper text-white">
      <div className="icon" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
      </div>
      {open ? mobileMenu : null}
    </div>
  );
  return (
    <header className="flex justify-between md:px-8 px-4 py-4 bg-background fixed top-0 left-0 w-screen z-20">
      <div className="left-side">
        <Typography
          font="font-rubik"
          size="lg:text-3xl sm:text-xl text-lg"
          weight="font-semibold"
          italic="no-italic"
        >
          Book App
        </Typography>
      </div>
      <div className="right-side">{width > 640 ? menu : icon}</div>
    </header>
  );
};

export default Header;
