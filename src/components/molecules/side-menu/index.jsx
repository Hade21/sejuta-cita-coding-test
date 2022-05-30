import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../app/api/axios";
import {
  setCategory,
  setWidth,
} from "../../../app/redux/features/content/bookSlice";
import { Typography } from "../../atoms";

const SideMenu = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [width, setWindowWidth] = useState(window.innerWidth);

  const setWinWidth = () => {
    setWindowWidth(window.innerWidth);
    dispatch(setWidth(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", setWinWidth());
    return () => {
      window.removeEventListener("resize", setWinWidth());
    };
  }, [width]);

  useEffect(() => {
    const result = async () => {
      try {
        const res = await axios.get("/fee-assessment-categories");
        if (res.status === 200) {
          setCategories(res.data);
        }
      } catch (err) {
        if (err?.response) {
          alert("Periksa koneksi internet Anda!");
        }
      }
    };
    result();
  }, []);

  const handleChoice = (e) => {
    e.preventDefault();
    dispatch(setCategory(e.target.id));
    setOpen(!open);
  };

  return (
    <section className="bg-background text-left sm:w-2/12 w-fit fixed top-0 left-0 h-screen flex flex-col pt-16 justify-center gap-4">
      <div className="hamburger text-white text-center sm:hidden px-4">
        <FontAwesomeIcon icon={faBars} onClick={() => setOpen(!open)} />
      </div>
      <div
        className={`${
          width < 640
            ? open
              ? "flex w-full h-full"
              : "invisible w-0 h-0"
            : "flex w-full h-full"
        } content flex-col justify-center lg:gap-8 xl:gap-12 sm:gap-8 gap-4 transition-all duration-200`}
      >
        <div className="title lg:px-4 px-2">
          <Typography
            font="font-rubik"
            size="lg:text-2xl sm:text-lg"
            weight="font-medium"
          >
            Categories
          </Typography>
        </div>
        <ul className="flex flex-col justify-center">
          {categories.map((item) => {
            return (
              <li
                className="hover:bg-hover-bg hover:text-white lg:px-8 px-4 xl:py-4 lg:py-2.5 py-2 cursor-pointer transition-all duration-200 text-slate-400 focus:bg-hover-bg focus:text-slate-400"
                id={item.id}
                key={item.id}
                onClick={handleChoice}
              >
                <Typography
                  id={item.id}
                  font="font-opensans"
                  size="lg:text-base sm:text-sm"
                  weight="font-medium"
                  color="text-inherit"
                >
                  {item.name}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SideMenu;
