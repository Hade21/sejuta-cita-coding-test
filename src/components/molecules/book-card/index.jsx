import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookmarked } from "../../../app/redux/features/content/bookSlice";
import { Button, Typography } from "../../atoms";

const BookCard = (props) => {
  const dispatch = useDispatch();
  const { title, image, desc, author, id } = props;
  const [bookmark, setBookmark] = useState(false);
  const content = useSelector((state) => state.book.contentBook);
  const bookmarked = useSelector((state) => state.book.bookmarked);

  const handleBookmark = (e) => {
    const id = Number(e.target.parentElement.parentElement.parentElement.id);
    setBookmark(true);
    const item = content.filter((item) => item.id === id)[0];
    const index = bookmarked.filter((item) => item.id === id);
    if (index.length === 0) {
      dispatch(setBookmarked(item));
    }
  };
  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
    console.log(localStorage.getItem("bookmarked"));
  }, [bookmarked]);

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
