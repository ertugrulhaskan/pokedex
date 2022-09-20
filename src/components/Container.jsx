import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto max-w-5xl px-5 md:px-2 lg:px-0">
      {children}
    </div>
  );
};

export default Container;
