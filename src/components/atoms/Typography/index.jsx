import React from "react";

const Typogrphy = (props) => {
  const {
    id,
    font = "font-opensans",
    size = "text-base",
    color = "text-white",
    italic = "no-itlic",
    weight = "font-normal",
    children,
  } = props;
  return (
    <p className={`${font} ${size} ${color} ${italic} ${weight}`} id={id}>
      {children}
    </p>
  );
};

export default Typogrphy;
