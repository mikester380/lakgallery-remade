import React from "react";

const Contact = () => {
  const setTextAreaHeight = (e) => {
    const element = e.target;
    const value = e.target.value;

    const lineBreaks = value.split("").filter((char) => char === "\n").length;
    const textAreaFontSize = parseInt(getComputedStyle(element).fontSize);

    element.style.height = "initial";
    const initialHeight = parseFloat(getComputedStyle(element).height);

    element.style.height = `${initialHeight + textAreaFontSize * lineBreaks}px`;
  };

  return (
    <div className="contact">
      <div className="contact__grid">
        <h2 className="contact__title">Get in touch</h2>
        <form className="contact__form">
          <input type="text" placeholder="Name" className="contact__field" />
          <input type="email" placeholder="Email" className="contact__field" />
          <textarea
            onChange={setTextAreaHeight}
            type="text"
            placeholder="Your message"
            className="contact__field"
          />
          <button className="contact__submit">Submit</button>
        </form>
        <div className="contact__line"></div>
        <div className="contact__about">
          <p>
            An international design gallery with the goal of bridging the gap
            between collectors and creators of collectible design from various
            artistic backgrounds. For more information and requests, please get
            in touch.
          </p>
        </div>
        <div className="contact__contacts">
          <ul className="contact__contacts-list">
            <li className="contact__contact">
              <a href="mailto:info@lakgallery.com" title="info@lakgallery.com">
                info@lakgallery.com
              </a>
            </li>
            <li className="contact__contact">
              <a href="call:+2347058013854" title="call: +2347058013854">
                +234 7058013854
              </a>
            </li>
            <li className="contact__contact contact__contact--social">
              <a
                href="https://www.instagram.com"
                title="check out our instagram"
              >
                Instagram
              </a>
            </li>
            <li className="contact__contact contact__contact--social">
              <a
                href="https://www.pinterest.com/lakgallery"
                title="check out our pinterest"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
