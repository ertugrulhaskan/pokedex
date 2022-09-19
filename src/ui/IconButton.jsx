import React from "react";
// import PropTypes from "prop-types";

const IconButton = ({ children, text, icon }) => {
  const alignment =
    icon === "left" ? "flex-row pl-3 pr-4" : "flex-row-reverse pl-4 pr-3";
  return (
    <button className={`btn-icon flex items-center ${alignment}`}>
      {children}
      {text}
    </button>
  );
};

// IconButton.propTypes = {
//   text: PropTypes.string,
// };

export default IconButton;
