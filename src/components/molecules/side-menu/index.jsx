import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../../app/api/axios";
import { setCategory } from "../../../app/redux/features/content/bookSlice";
import { Typography } from "../../atoms";

const SideMenu = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

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
  };

  return (
    <section className="bg-background text-left w-2/12 fixed top-0 left-0 h-screen flex flex-col justify-center gap-12">
      <div className="title px-4">
        <Typography font="font-rubik" size="text-2xl" weight="font-medium">
          Categories
        </Typography>
      </div>
      <ul className="flex flex-col justify-center">
        {categories.map((item) => {
          return (
            <li
              className="hover:bg-hover-bg hover:text-white px-8 py-4 cursor-pointer transition-all duration-200 text-slate-400 focus:bg-hover-bg focus:text-slate-400"
              id={item.id}
              key={item.id}
              onClick={handleChoice}
            >
              <Typography
                id={item.id}
                font="font-opensans"
                size="text-normal"
                weight="font-medium"
                color="text-inherit"
              >
                {item.name}
              </Typography>
            </li>
          );
        })}
        {/* <li className="hover:bg-hover-bg hover:text-white px-8 py-4 cursor-pointer transition-all duration-200 text-slate-400">
          <Typography
            font="font-opensans"
            size="text-normal"
            weight="font-medium"
            color="text-inherit"
          >
            Happines & Mindfullness
          </Typography>
        </li>
        <li className="hover:bg-hover-bg hover:text-white px-8 py-4 cursor-pointer transition-all duration-200 text-slate-400">
          <Typography
            font="font-opensans"
            size="text-normal"
            weight="font-medium"
            color="text-inherit"
          >
            Career & Bussiness
          </Typography>
        </li>
        <li className="hover:bg-hover-bg hover:text-white px-8 py-4 cursor-pointer transition-all duration-200 text-slate-400">
          <Typography
            font="font-opensans"
            size="text-normal"
            weight="font-medium"
            color="text-inherit"
          >
            Productivity & Time Management
          </Typography>
        </li>
        <li className="hover:bg-hover-bg hover:text-white px-8 py-4 cursor-pointer transition-all duration-200 text-slate-400">
          <Typography
            font="font-opensans"
            size="text-normal"
            weight="font-medium"
            color="text-inherit"
          >
            Society & Politics
          </Typography>
        </li>
        <li className="hover:bg-hover-bg hover:text-white px-8 py-4 cursor-pointer transition-all duration-200 text-slate-400">
          <Typography
            font="font-opensans"
            size="text-normal"
            weight="font-medium"
            color="text-inherit"
          >
            Invesment & Finance
          </Typography>
        </li> */}
      </ul>
    </section>
  );
};

export default SideMenu;
