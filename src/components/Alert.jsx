import React from "react";

const Alert = ({ type, text, hideAlert }) => {
  const handleclick = () => hideAlert();

  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      {type === "danger" ? (
        <div className="flex min-w-[300px] shadow-lg rounded-lg">
          <div className="bg-red-200 py-4 px-6 rounded-l-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="fill-current text-red-500"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"
              ></path>
            </svg>
          </div>
          <div className="px-4 py-2 rounded-r-lg flex justify-between items-center w-full bg-red-200 text-red-500">
            <div>{text}</div>
            <button className="cursor-pointer" onClick={handleclick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-red-500"
                viewBox="0 0 16 16"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex min-w-[300px] shadow-lg rounded-lg">
          <div className="bg-green-200 py-4 px-6 rounded-l-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="fill-current text-green-500"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
              ></path>
            </svg>
          </div>
          <div className="px-4 py-2 rounded-r-lg flex justify-between items-center w-full bg-green-200 text-green-500">
            <div>{text}</div>
            <button className="cursor-pointer" onClick={handleclick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-green-500"
                viewBox="0 0 16 16"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
