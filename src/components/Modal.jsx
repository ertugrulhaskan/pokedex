import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const [modalVisibility, setModalVisibility] = useState(true);

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-10 h-full w-full bg-black bg-opacity-70 p-3 
        ${modalVisibility ? "block" : "hidden"}`}
    >
      <div className="flex h-full flex-col items-center justify-center">
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
