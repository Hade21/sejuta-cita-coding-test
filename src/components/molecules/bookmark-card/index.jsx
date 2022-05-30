import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Typography } from "../../atoms";

const BookmarkCard = (props) => {
  const { image, title, author, desc, handleRemove, id } = props;

  return (
    <div
      className="wrapper block p-6 bg-background rounded-lg bg-opacity-80 w-full h-full"
      id={id}
    >
      <div className="flex gap-6 justify-between h-full">
        <div className="cover w-2/5">
          <img src={image} alt="cover" />
        </div>
        <div className="caption w-3/5 text-left flex flex-col gap-3 justify-between h-full">
          <div className="detail flex flex-col gap-3">
            <Typography font="font-rubik" size="text-xl" weight="font-semibold">
              {title}
            </Typography>
            <Typography
              font="font-opensans"
              size="text-base"
              weight="font-normal"
              color="text-slate-300"
            >
              By {author}
            </Typography>
            <Typography
              font="font-opensans"
              size="text-base"
              weight="font-medium"
            >
              {desc}
            </Typography>
          </div>
          <Button
            font="font-opensans"
            size="text-base"
            weight="font-light"
            px="px-0"
            fontColor="text-yellow-500"
            onClick={handleRemove}
          >
            <FontAwesomeIcon icon={faTrash} /> Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
