import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Typography } from "../../atoms";

const BookCard = (props) => {
  const { title, image, desc, author, id, goDetail } = props;
  const [bookmark, setBookmark] = useState(false);
  const content = useSelector((state) => state.book.contentBook);

  const handleBookmark = (e) => {
    setBookmark(!bookmark);
    const id = Number(e.target.parentElement.parentElement.parentElement.id);
    const bookmarked = JSON.parse(localStorage.getItem("bookmarked"));
    console.log(bookmarked);
    const index = bookmarked.findIndex((item) => item.id === id);
    if (index === -1 || bookmarked === null) {
      const item = content.filter((item) => item.id === id)[0];
      bookmarked.push(item);
      localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
    } else {
      bookmarked.splice(index, 1);
      localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
    }
  };

  return (
    <div
      className="wrapper block p-6 bg-background rounded-lg bg-opacity-80 w-full h-full"
      id={id}
      key={id}
    >
      <div className="flex flex-col sm:flex-row gap-6 justify-between h-full">
        <div className="cover sm:w-2/5 w-full">
          <img
            src={image}
            alt="cover"
            onClick={goDetail}
            className="cursor-pointer"
          />
        </div>
        <div className="caption sm:w-3/5 w-full text-left flex flex-col gap-3 justify-between h-full">
          <div className="detail flex flex-col gap-3">
            <Typography
              font="font-rubik"
              size="xl:text-xl lg:text-sm"
              weight="font-semibold"
            >
              {title}
            </Typography>
            <Typography
              font="font-opensans"
              size="xl:text-base lg:text-xs"
              weight="font-normal"
              color="text-slate-300"
            >
              By {author}
            </Typography>
            <Typography
              font="font-opensans"
              size="xl:text-base lg:text-xs"
              weight="font-medium"
            >
              {desc}
            </Typography>
          </div>
          <Button
            font="font-opensans"
            size="xl:text-base lg:text-xs"
            weight="font-light"
            px="px-0"
            fontColor="text-yellow-500"
            onClick={handleBookmark}
          >
            <FontAwesomeIcon icon={faBookmark} />{" "}
            {bookmark ? "Bookmarked" : "Bookmark"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
