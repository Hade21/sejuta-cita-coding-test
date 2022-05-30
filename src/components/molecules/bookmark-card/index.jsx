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
      <div className="flex flex-col sm:flex-row gap-6 justify-between h-full">
        <div className="cover sm:w-2/5 w-full">
          <img src={image} alt="cover" />
        </div>
        <div className="caption sm:w-3/5 w-full text-left flex flex-col gap-3 justify-between h-full">
          <div className="detail flex flex-col gap-3">
            <Typography
              font="font-rubik"
              size="lg:text-xl sm:text-lg"
              weight="font-semibold"
            >
              {title}
            </Typography>
            <Typography
              font="font-opensans"
              size="lg:text-base text-sm"
              weight="font-normal"
              color="text-slate-300"
            >
              By {author}
            </Typography>
            <Typography
              font="font-opensans"
              size="lg:text-base text-sm"
              weight="font-medium"
            >
              {desc}
            </Typography>
          </div>
          <Button
            font="font-opensans"
            size="lg:text-base text-sm"
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
