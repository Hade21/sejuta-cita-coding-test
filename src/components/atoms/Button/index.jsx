import React from "react";

const Button = (props) => {
  const {
    children,
    disabled,
    onClick = (e) => e.preventDefault(),
    type = "submit",
    bgColor = "bg-transparent",
    fontColor = "text-white",
    font = "font-rubik",
    size = "text-base",
    px = "px-6",
    py = "py-4",
  } = props;
  return (
    <button
      className={`${px} ${py} ${bgColor} ${font} ${fontColor} ${size} ${
        disabled
          ? `text-slate-400`
          : `hover:text-slate-400 active:translate-y-1`
      } transition-all`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
