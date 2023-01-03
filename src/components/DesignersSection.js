import React from "react";
import { designers } from "../data/data";

const DesignersSection = ({ letter, showImage, hideImage }) => {
  const designerNames = designers
    .map(({ name }) => name)
    .filter((name) => name[0] === letter);

  return (
    <section className="designers__section">
      <span className="designers__section-letter">({letter})</span>
      <div className="designers__names">
        {designerNames.map((designerName, index) => {
          const image = designers.find(
            ({ name }) => name === designerName
          ).image;
          return (
            <a
              href="#"
              className="designers__name"
              key={index}
              onMouseMove={() => showImage(image, designerName)}
              onMouseLeave={hideImage}
            >
              {designerName}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default DesignersSection;
