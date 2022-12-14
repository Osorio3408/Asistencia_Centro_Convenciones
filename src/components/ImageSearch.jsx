import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-8 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-lime-500 py-1">
          <input
            onChange={(e) => setText(e.target.value)}
            className="text-white appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image..."
          />
          <button
            className=" flex-shrink-0 bg-lime-500 hover:bg-lime-700 border-lime-500 hover:border-lime-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
