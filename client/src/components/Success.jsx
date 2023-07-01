import React from 'react';

function Success({ message }) {
  return (
    <div className="flex items-center">
      <div className="relative bg-green-200 max-w-xl px-4 py-2 text-green-800 rounded shadow w-full m-auto my-3 text-center">
        <span className="block text-sm">{message}</span>
      </div>
    </div>
  );
}

export default Success;
