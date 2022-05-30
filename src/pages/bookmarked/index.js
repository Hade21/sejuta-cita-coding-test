import React from "react";
import { BookmarkContent, Gap } from "../../components";
import { Header } from "../../components/molecules";

const Bookmark = () => {
  return (
    <section>
      <Header />
      <div className="content bg-content w-full flex flex-col justify-center">
        <Gap width="w-full" height="h-16" />
        <div className="wrapper w-full flex flex-col items-center">
          <BookmarkContent />
        </div>
      </div>
    </section>
  );
};

export default Bookmark;
