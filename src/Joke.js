import React from "react";

const Card = ({ joke }) => {
  return (
    <div className="joke">
      <div className="joke__body">
        <h4 className="joke__textOutput">. </h4>
        <p className="joke__textOutput">{joke}</p>
      </div>
    </div>
  );
};

export default Card;
