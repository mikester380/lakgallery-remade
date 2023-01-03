import React from "react";
import { about } from "../data/data";

const About = () => {
  const { title, body } = about;
  const bodyParagraphs = body.split("\n");
  return (
    <main className="main">
      <div className="about">
        <div className="about__title">
          <span className="about__title-sub">(A)</span>
          <h2 className="about__title-main">{title}</h2>
        </div>
        <div className="about__body">
          {bodyParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <ul className="about__links">
          <li className="about__link about__email">
            <a href="mailto:info@lakgallery.com">info@lakgallery.com</a>
          </li>
          <li className="about__link">
            <a href="https://www.instagram.com/_lakgallery">Instagram</a>
          </li>
          <li className="about__link">
            <a href="https://www.pinterest.com/lakgallery">Pinterest</a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default About;
