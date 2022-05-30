import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "../../components";

const Detail = () => {
  const navigate = useNavigate();
  const id = Number(window.location.pathname.split("/")[2]);
  const content = useSelector((state) => state.book.contentBook);
  const detail = content.filter((i) => i.id === id)[0];
  console.log(detail);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="bg-background w-full h-full text-white">
      <div className="back fixed md:top-8 md:left-8 top-4 left-4">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBack} />
      </div>
      <div className="content-head md:px-20 md:py-8 px-8 py-4 flex md:flex-row flex-col md:gap-6 gap-4 items-center">
        <div className="cover md:w-1/3 w-8/12">
          <img src={detail.cover_url} alt="cover" />
        </div>
        <div className="preview text-left flex flex-col md:gap-6 gap-3 md:w-2/3">
          <Typography
            font="font-rubik"
            size="md:text-4xl text-lg"
            weight="font-semibold"
          >
            {detail.title}
          </Typography>
          <Typography
            font="font-opensans"
            size="md:text-xl text-sm"
            weight="font-normal"
            color="text-slate-400"
          >
            By {detail.authors}
          </Typography>
          <Typography
            font="font-opensans"
            size="md:text-xl text-sm"
            weight="font-semibold"
          >
            {detail.description}
          </Typography>
        </div>
      </div>
      <div className="section text-left md:px-20 md:pb-8 px-8 py-4 mt-8">
        <Typography
          font="font-rubik"
          size="md:text-2xl text-xl"
          weight="font-semibold"
        >
          Detail Book
        </Typography>
        <div className="detail-book flex flex-col gap-6 mt-4">
          {detail.sections.map((item) => {
            return (
              <div className="wrapper">
                <div className="title text-center">
                  <Typography
                    font="font-rubik"
                    size="md:text-2xl text-lg"
                    weight="font-semibold"
                  >
                    {item.title}
                  </Typography>
                </div>
                <div className="content">
                  <Typography
                    font="font-opensans"
                    size="md:text-xl text-sm"
                    weight="font-normal"
                    color="text-slate-400"
                  >
                    {item.content}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Detail;
