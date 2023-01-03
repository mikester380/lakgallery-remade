import { React, useState } from "react";

const FilterSection = ({ filters }) => {
  const [viewSection, setViewSection] = useState(false);
  const { title, options } = filters;

  return (
    <div className="pieces__d-filter-section">
      <button
        className="pieces__d-filter-toggle"
        onClick={() => setViewSection(!viewSection)}
      >
        <span>{title}</span>
        <span
          className={
            !viewSection
              ? "pieces__d-filter-icon"
              : "pieces__d-filter-icon--active"
          }
        >
          <svg
            fill="#000000"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="chevron"
          >
            <title>chevron-down</title>
            <polygon points="12 20.1 0.1 8.2 2.9 5.3 12 14.4 21.1 5.3 23.9 8.2 12 20.1" />
          </svg>
        </span>
      </button>
      <ul
        className={
          viewSection
            ? "pieces__d-filter-list"
            : "pieces__d-filter-list pieces__d-filter-list--hidden"
        }
      >
        {options.map((option, index) => {
          //   const optionParam = option.split(" ").join("-").toLowerCase();
          return (
            <li className="pieces__d-filter-option" key={index}>
              {/* <a href={`pieces/${title.toLowerCase()}/${optionParam}`}>
                {option}
              </a> */}
              <a href="#">{option}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterSection;
