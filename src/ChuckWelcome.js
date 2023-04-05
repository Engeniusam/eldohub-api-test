import React from "react";
import welcome from "./welcome.png";
import ReactTypingEffect from "react-typing-effect";
import "./ChuckWelcome.css";

function ChuckWelcome() {
  return (
    <div className="chuckWelcome">
      <div className="chuckWelcome__info">
        <img
          className="chuckWelcome__image"
          src={welcome}
          alt="Welcoming intro"
        />
        <div className="chuckWelcome__info__text">
          <ReactTypingEffect
            className="chuckWelcome__info__text--effect"
            text={[
              "Welcome to Chuck's Comedy Industry.",
              "Home of Comedy.",
              "Your smile is our concern.",
            ]}
          />
          <div className="chuckWelcome__info__emoji">
            <span className="emoji">🤣</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChuckWelcome;
