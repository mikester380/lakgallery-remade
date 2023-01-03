import React from "react";

const GalleryImage = function ({ link, image }) {
  return (
    <a
      href={link}
      className="home__gallery-link"
      rel="noreferrer"
      target="_blank"
    >
      <div className="home__gallery-image">
        <img src={image} alt={"product on instagram"} />
      </div>
    </a>
  );
};

export default GalleryImage;
