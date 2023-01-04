import React, { useState } from "react";
import DesignersSection from "../components/DesignersSection";
import Layout from "../components/Layout";
import { designers } from "../data/data";
import { preloadImage } from "../utils/helpers";

const Designers = () => {
  const sectionLetters = [
    ...new Set(designers.map(({ name }) => name[0])),
  ].sort();

  const [image, setImage] = useState([]);

  //preloading images...
  designers.forEach(({ image }) => preloadImage(image));

  const showImage = (src, alt) => {
    setImage([src, alt]);
  };

  const hideImage = () => {
    setImage([]);
  };

  return (
    <Layout>
      <div className="designers" id="designers">
        <div className="designers__all-names">
          {sectionLetters.map((letter, index) => (
            <DesignersSection
              letter={letter}
              key={index}
              showImage={showImage}
              hideImage={hideImage}
            />
          ))}
        </div>
        <div className="designers__images">
          <img
            src={image.length ? image[0] : ""}
            alt={image.length ? image[1] : ""}
            data-visible={image.length ? "true" : "false"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Designers;
