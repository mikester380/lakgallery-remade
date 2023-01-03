import React from "react";

const TeamMember = function ({ name, photo }) {
  return (
    <div className="home__team-member">
      <div className="home__team-member-photo">
        <img src={photo} alt={name} />
      </div>
      <p className="home__team-member-name">{name}</p>
    </div>
  );
};

export default TeamMember;
