import React from 'react';

function Searchbar() {
  return (
    <div className="max-w-sm w-full py-2 relative">
      <div className="absolute left-2 top-4 text-lg opacity-50">
        <i className="fa fa-search hover:text-green-400" />
      </div>

      <div className="absolute right-2 top-4 text-lg">
        <i className="fa fa-times hover:text-red-500 hidden" />
      </div>

      <input
        type="text"
        placeholder="search"
        className="border-solid border-2 border-gray-300 py-2 w-full pl-7 rounded-md"
      />
    </div>
  );
}

export default Searchbar;
