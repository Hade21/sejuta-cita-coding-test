import React from "react";
import { BookCard } from "../../molecules";

const ContentWrapper = () => {
  return (
    <section className="w-10/12 bg-content p-8 grid grid-cols-2 grid-rows-3 pb-14">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </section>
  );
};

export default ContentWrapper;
