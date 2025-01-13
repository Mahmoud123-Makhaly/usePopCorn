import React, { useEffect, useRef } from "react";
import { useKey } from "../hooks/useKey";

const Search = ({ query, setQuery }) => {
  const inputRef = useRef(null);
  useKey("Enter", function () {
    if (document?.activeElement === inputRef?.current) return;
    if (inputRef) inputRef.current.focus();
    setQuery("");
  });
  // useEffect(() => {
  //   const callback = function (e) {
  //     if (e.code === "Enter") {
  //       if (document.activeElement === inputRef.current) return;
  //       inputRef.current.focus();
  //       setQuery("");
  //     }
  //   };
  //   document.addEventListener("keydown", callback);
  //   return () => {
  //     document.addEventListener("keydown", callback);
  //   };
  // }, [setQuery]);
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  );
};

export default Search;
