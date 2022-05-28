import React from "react";
import { Typography } from "../../atoms";

const BookCard = () => {
  return (
    <div className="wrapper block w-fit">
      <div className="w-96 flex gap-6">
        <div className="cover h-full w-full">
          <img
            src="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png"
            alt=""
          />
        </div>
        <div className="caption text-left flex flex-col gap-3">
          <Typography font="font-rubik" size="text-xl" weight="font-semibold">
            The Intelligent Investor
          </Typography>
          <Typography
            font="font-opensans"
            size="text-base"
            weight="font-normal"
            color="text-slate-300"
          >
            By Benjamin Graham
          </Typography>
          <Typography
            font="font-opensans"
            size="text-base"
            weight="font-medium"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            vo
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
