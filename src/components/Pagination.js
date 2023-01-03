import React from "react";

const Pagination = ({ current, total }) => {
  return (
    <div className="pagination">
      <p>
        Page <span>{current}</span> of <span>{total}</span>
      </p>
      <span className="pagination__chevron">
        <svg
          width="20"
          // height="20"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#000000"
            fillRule="evenodd"
            d="M5.205 3.235a.75.75 0 00.03 1.06L9.158 8l-3.923 3.705a.75.75 0 001.03 1.09l4.5-4.25a.75.75 0 000-1.09l-4.5-4.25a.75.75 0 00-1.06.03z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default Pagination;
