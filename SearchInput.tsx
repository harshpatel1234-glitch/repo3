import React from "react";

function SearchInput() {
  return (
    <div className="p-4">
      <h2 className="text-center text-[20px] md:text-[30px] text-gray-400 mb-4">
        Let’s Search What You Need
      </h2>
      <div className="flex flex-col items-center gap-3">
        {/* Location Input */}
        <div className="flex items-center bg-gray-100 p-3 rounded-full w-full md:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-black mr-2"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Location"
            className="p-2 outline-none bg-transparent text-gray-400 w-full md:w-auto"
          />
        </div>

        {/* Date Input */}
        <div className="flex items-center bg-gray-100 p-3 rounded-full w-full md:w-auto">
          <input
            type="date"
            className="p-2 outline-none bg-transparent text-gray-400 w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
