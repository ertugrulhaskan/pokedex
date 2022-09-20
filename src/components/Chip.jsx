import React, { useState } from "react";
// import PropTypes from 'prop-types'
import { MdOutlineClear } from "react-icons/md";

const Chip = ({ children, text }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="flex cursor-pointer flex-row items-center justify-start rounded-full border border-gray-200 bg-white py-1 pl-2 pr-3 text-sm font-semibold"
      onClick={() => setClicked(true)}
    >
      <div className="mr-2 w-4">{children}</div>
      {text}
      {clicked && (
        <button
          className="ml-2"
          onClick={(e) => {
            e.stopPropagation();
            setClicked(false);
          }}
        >
          <MdOutlineClear />
        </button>
      )}
    </div>
  );
};

// Chip.propTypes = {}

export default Chip;
