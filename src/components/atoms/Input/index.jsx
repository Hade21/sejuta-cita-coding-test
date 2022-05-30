import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = (props) => {
  const {
    name,
    px = "px-4",
    py = "py-2",
    size = "text-base",
    onChange,
  } = props;
  return (
    <div
      className={`bg-content rounded-md text-white ${px} ${py} ${size} flex gap-2 items-center`}
    >
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        name={name}
        id={name}
        className="bg-transparent outline-none focus:outline-none"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
