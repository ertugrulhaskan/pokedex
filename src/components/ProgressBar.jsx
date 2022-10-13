import React from "react";

const ProgressBar = ({ value, className }) => {
  return (
    <div
      className={`flex h-2 w-full flex-row items-center overflow-hidden rounded-full bg-zinc-100`}
    >
      <div
        style={{ width: `${value}%` }}
        className={`h-2 ${className} rounded-full`}
      ></div>
    </div>
  );
};

export default ProgressBar;
