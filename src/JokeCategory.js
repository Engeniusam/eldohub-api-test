import React, { useState } from "react";
import { Button } from "@mui/material";
import SelectedCategory from "./SelectedCategory.js";
import "./JokeCategory.css";

const JokeCategory = ({ randomJoke, category }) => {
  const [categorySelected, setCategorySelected] = useState("");
  const [newJoke, setNewJoke] = useState("");

  const currentCategory = (currentCat) => {
    setCategorySelected(currentCat);
  };

  const getJoke = () => {
    if (!categorySelected.length > 0 || categorySelected === "random") {
      setCategorySelected("random");
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((newJoke) => setNewJoke(newJoke.value));
    } else {
      fetch(
        `https://api.chucknorris.io/jokes/random?category=${categorySelected}`
      )
        .then((response) => response.json())
        .then((newJoke) => setNewJoke(newJoke.value));
    }
    return newJoke;
  };

  const currentJoke = !categorySelected.length > 0 ? randomJoke : newJoke;

  return (
    <div className="jokeCategory">
      <div className="jokeCategory__body ">
        <p className="jokeCategory__text">{currentJoke}</p>
        <div className="jokeCategory__row">
          <div className="jokeCategory__column1">
            <SelectedCategory
              category={category}
              currentCategory={currentCategory}
            />
          </div>
          <div className="jokeCategory__column2">
            <Button onClick={getJoke} className="joke__btn">
              Get Joke
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeCategory;
