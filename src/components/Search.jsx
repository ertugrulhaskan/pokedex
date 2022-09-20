import React, { useState } from "react";
// import PropTypes from 'prop-types'
import { MdSearch, MdOutlineClear } from "react-icons/md";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <form className="relative flex w-full flex-row">
      <button className="pointer-events-none absolute inset-y-0 left-3 text-xl text-zinc-400">
        <MdSearch />
      </button>
      <input
        className="w-full rounded-full bg-zinc-100 py-2 pl-10 pr-1 text-zinc-900 placeholder:text-zinc-400"
        type="text"
        placeholder="Search Pokemon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="button"
        className="absolute top-1.5 right-2 flex h-7 w-7 flex-row items-center justify-center rounded-full text-center text-xl text-zinc-400 hover:bg-zinc-400 hover:text-white"
        onClick={() => setQuery("")}
      >
        <MdOutlineClear />
      </button>
    </form>
  );
};

// Search.propTypes = {}

export default Search;
