import React from "react";

const Modal = (props) => {
  return (
    <div className="fixed inset-0 h-full w-full bg-black bg-opacity-70">
      <div className="flex h-full flex-col items-center justify-center">
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
