import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = (props) => {
  const { name } = props;
  return (
    <div className="bg-content rounded-md text-white px-4 py-2 flex gap-2 items-center">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        name={name}
        id={name}
        className="bg-transparent outline-none focus:outline-none"
      />
    </div>
  );
};

export default Input;
