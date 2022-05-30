import React from "react";
import { ContentWrapper, Header, SideMenu } from "../../components";

const Home = () => {
  return (
    <section>
      <Header />
      <div className="content flex pt-16">
        <SideMenu />
        <ContentWrapper />
      </div>
    </section>
  );
};

export default Home;
