import React from "react";
import { Typography } from "../../atoms";

const SideMenu = () => {
  return (
    <section className="bg-background text-left w-2/12 h-screen flex flex-col justify-center gap-12">
      <div className="title px-4">
        <Typography font="font-rubik" size="text-3xl" weight="font-medium">
          Categories
        </Typography>
      </div>
      <ul className="flex flex-col justify-center">
        <li className="hover:bg-hover-bg hover:text-white px-8 py-4 cursor-pointer transition-all duration-200 text-slate-400">
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
        </li>
      </ul>
    </section>
  );
};

export default SideMenu;
