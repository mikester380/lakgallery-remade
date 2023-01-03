import React from "react";

const Story = ({ title, author, image }) => {
  return (
    <div className="story">
      <div className="story__image">
        <img src={image} alt={author} />
      </div>
      <p className="story__title">{`${author}: ${title}`}</p>
    </div>
  );
};

export default Story;
