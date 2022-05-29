import React from "react";
import { ContentWrapper, Header, SideMenu } from "../../components";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content flex pt-16">
        <SideMenu />
        <ContentWrapper />
      </div>
    </div>
  );
};

export default Home;
