import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../app/api/axios";
import {
  setContent,
  setPage,
  setSize,
} from "../../../app/redux/features/content/bookSlice";
import { Button, Gap, Typography } from "../../atoms";
import { BookCard } from "../../molecules";

const ContentWrapper = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.book.page);
  const size = useSelector((state) => state.book.size);
  const categoryId = useSelector((state) => state.book.categoryId);
  const content = useSelector((state) => state.book.contentBook);

  useEffect(() => {
    async function getData() {
      const endpoint = `/fee-assessment-books/?categoryId=${categoryId}&page=${page}&size=${size}`;
      try {
        const res = await axios.get(endpoint);
        if (res.status === 200) {
          dispatch(setContent(res.data));
        }
      } catch (err) {}
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, page, size]);

  const bookList = (
    <div className="wrapper p-12 grid grid-cols-2 gap-4 w-full">
      {content.map((item) => {
        return (
          <BookCard
            title={item.title}
            image={item.cover_url}
            desc={item.description}
            author={item.authors}
            id={item.id}
          />
        );
      })}
      <div className="load-more flex items-center h-full justify-center">
        <Button
          font="font-opensans"
          onClick={() => {
            size <= 5
              ? dispatch(setSize(size + 5))
              : dispatch(setSize(size - 5));
          }}
        >
          <Typography>
            {size === 5 ? "See more ..." : "See Less ..."}
          </Typography>
        </Button>
      </div>
    </div>
  );
  const noBook = (
    <div className="wrapper flex justify-center items-center h-full">
      <Typography font="font-rubik" size="text-4xl" weight="font-semibold">
        Please Select Category
      </Typography>
    </div>
  );
  const buttonGroup = (
    <div className="page flex justify-around pb-6">
      <Button
        fontColor={page === 0 ? "text-slate-400" : "text-white"}
        activeColor="text-slate-400"
        onClick={() => dispatch(setPage(page - 1))}
        disabled={page === 0 ? true : false}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} /> Previous
      </Button>
      <Button
        fontColor={
          content.length > 0
            ? content[content.length - 1].id === 85
              ? "text-slate-400"
              : "text-white"
            : null
        }
        onClick={() => dispatch(setPage(page + 1))}
        activeColor="text-slate-400"
        disabled={
          content.length > 0
            ? content[content.length - 1].id === 85
              ? true
              : false
            : false
        }
      >
        Next <FontAwesomeIcon icon={faArrowRightLong} />
      </Button>
    </div>
  );

  return (
    <section className="bg-content w-full flex justify-center">
      <Gap width="w-2/12" height="h-screen" />
      <div className="content w-10/12 flex flex-col justify-between">
        {categoryId !== 0 ? bookList : noBook}
        {categoryId > 0 ? buttonGroup : null}
      </div>
    </section>
  );
};

export default ContentWrapper;
