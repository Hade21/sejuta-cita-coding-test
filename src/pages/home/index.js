import React from "react";
import { ContentWrapper, Header, SideMenu } from "../../components";

const Home = () => {
  return (
    <section>
      <Header />
      <div className="content flex lg:pt-16 pt-14">
        <SideMenu />
        <ContentWrapper />
      </div>
    </section>
  );
};

export default Home;
