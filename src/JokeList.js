import React from "react";
import Joke from "./Joke.js";

const JokeList = ({ findJoke }) => {
  return (
    <div className="jokeList">
      {findJoke.map((joke, i) => {
        return <Joke key={i} joke={joke.value} />;
      })}
    </div>
  );
};

export default JokeList;
