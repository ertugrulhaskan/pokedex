import React from "react";

const Header = () => {
  return (
    <header className="py-6">
      <h1 className="flex flex-row items-center">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="mr-2 h-32 w-32"
          >
            <path
              fill="#fe0505"
              stroke="#000"
              d="M26.425 16.455A10.925 10.925 0 0 1 15.5 27.38 10.925 10.925 0 0 1 4.575 16.455 10.925 10.925 0 0 1 15.5 5.53a10.925 10.925 0 0 1 10.925 10.925z"
            />
            <path
              fill="#fff"
              fillRule="evenodd"
              stroke="#000"
              d="M26.245 17.168c-1.024.744-1.984 1.248-3.282 1.757-4.738 1.84-10.565 1.816-15.271-.06-1.13-.455-2.12-.99-3.042-1.626.387 5.753 5.119 10.207 10.885 10.207 6.491-.256 10.32-5.361 10.71-10.278z"
            />
            <path
              fillRule="evenodd"
              d="m26.196 1036.339-.508.406c-.94.682-1.83 1.116-3.088 1.61-4.476 1.737-10.09 1.715-14.535-.055h-.004a15.14 15.14 0 0 1-2.568-1.32c-.02-.014-.166-.133-.354-.263l-.842 1.431c.04.028-.105.372.11.51.89.577 1.867 1.078 2.912 1.499h.002c4.968 1.98 11.005 2.003 16.004.062h.004c1.337-.525 2.43-1.053 3.537-1.856l-.038-.18-.128-.85-.504-.993z"
              color="#000"
              fontFamily="sans-serif"
              fontWeight="400"
              overflow="visible"
              transform="translate(0 -1020.362)"
            />
            <path
              fill="#fff"
              stroke="#000"
              d="M17.976 19.69a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4 2.4 2.4 0 0 1 2.4 2.4z"
            />
          </svg>
        </a>
        <div>
          What Pokemon <br />
          are you looking for?
        </div>
      </h1>
    </header>
  );
};

export default Header;
