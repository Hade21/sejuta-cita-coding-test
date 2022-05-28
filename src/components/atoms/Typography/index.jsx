import React from "react";

const Typogrphy = (props) => {
  const {
    font = "font-opensans",
    size = "text-base",
    color = "text-white",
    italic = "no-itlic",
    weight = "font-normal",
    children,
  } = props;
  return (
    <p className={`${font} ${size} ${color} ${italic} ${weight}`}>{children}</p>
  );
};

export default Typogrphy;
