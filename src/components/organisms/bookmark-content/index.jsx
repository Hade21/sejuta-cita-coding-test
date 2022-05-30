import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Button } from "../../atoms";
import { BookmarkCard } from "../../molecules";

const BookmarkContent = () => {
  const [bookmarkedContent, setBookmarkedContent] = useState([]);
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(0);
  const size = 5;
  const search = useSelector((state) => state.book.search);

  const [loopContent, setLoopContent] = useState(content);

  useEffect(() => {
    if (search.length !== 0) {
      const items = content.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setLoopContent(items);
      if (items.length === 0) {
        const res = content.filter((item) =>
          item.authors[0].toLowerCase().includes(search.toLowerCase())
        );
        setLoopContent(res);
      }
    } else {
      setLoopContent(content);
    }
  }, [search, content]);

  useEffect(() => {
    setBookmarkedContent(JSON.parse(localStorage.getItem("bookmarked")));
    if (bookmarkedContent.length > 5) {
      const loopContent = bookmarkedContent.splice(page, size);
      setContent(loopContent);
    } else {
      setContent(bookmarkedContent);
    }
  }, [page, bookmarkedContent]);

  const handleRemove = (e) => {
    const idContent = Number(
      e.target.parentElement.parentElement.parentElement.id
    );
    const index = bookmarkedContent.findIndex((item) => item.id === idContent);
    console.log(bookmarkedContent[0].id);
    bookmarkedContent.splice(index, 1);
    localStorage.setItem("bookmarked", JSON.stringify(bookmarkedContent));
    setBookmarkedContent(JSON.parse(localStorage.getItem("bookmarked")));
    if (bookmarkedContent.length > 5) {
      const loopContent = bookmarkedContent.splice(page, size);
      setContent(loopContent);
    } else {
      setContent(bookmarkedContent);
    }
  };

  const bookList = (
    <div className="wrapper sm:p-12 py-12 px-4 grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
      {loopContent.map((item) => {
        return (
          <BookmarkCard
            title={item.title}
            image={item.cover_url}
            desc={item.description}
            author={item.authors}
            id={item.id}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
  const noBook = (
    <div className="wrapper flex justify-center items-center h-full min-h-screen">
      <Typography
        font="font-rubik"
        size="lg:text-4xl sm:text-2xl"
        weight="font-semibold"
      >
        No Books Here
      </Typography>
    </div>
  );
  return (
    <div className="bg-content w-full h-full min-h-screen">
      {loopContent.length > 0 ? bookList : noBook}
      {bookmarkedContent.length > 5 ? (
        <div className="buttons flex items-center w-full h-fit py-6 justify-center">
          <Button
            font="font-opensans"
            size="lg:text-base sm:text-xs"
            onClick={() => {
              setPage(page - 5);
            }}
            disabled={page === 0 ? true : false}
          >
            <Typography color="text-inherit">Previous</Typography>
          </Button>
          <Button
            font="font-opensans"
            size="lg:text-base sm:text-xs"
            onClick={() => {
              setPage(page + 5);
            }}
            disabled={page >= bookmarkedContent.length - 5 ? true : false}
          >
            <Typography color="text-inherit">Next</Typography>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default BookmarkContent;
