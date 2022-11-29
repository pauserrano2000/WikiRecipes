import "./SearchMeal.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDarkThemeContext } from "../../Context/theme-context";
import { searchMeal } from "../../services/apicalls";

import MealsContainer from "../../Components/MealsContainer/MealsContainer";
import MealItem from "../../Components/MealItem/MealItem";

const SearchMeal = () => {
  const navigate = useNavigate();
  const { darkTheme} = useDarkThemeContext();
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //EXECUTED WHEN THE USER STOPS WRITING 1SEC
    const timer = setTimeout(() => {
      if (query) {
        setIsLoading(true);
        searchMeal(query)
          .then((res) => setMeals(res.data.meals))
          .catch((error) => console.log(error));
        setIsLoading(false);
        setQuery("");
      } else {
        console.log("No query, nothing being searched!");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  const searchHandler = (event) => {
    setQuery(event.target.value);
  };

  const onDeleteHandler = (mealId) => {
    setMeals((prevState) => prevState.filter((meal) => meal.idMeal !== mealId));
  };

  return (
    <div className={`search-meal-design ${darkTheme ? "search-dark-theme-background" : ""} `}>
      <div className="search-container">
        <input
          className="search"
          type="search"
          placeholder="Introduce the recipe name..."
          onChange={searchHandler}
          value={query}
        />
      </div>
      <div className="search-content-container">
        {isLoading && <p className={`loading-design ${darkTheme ? "search-dark-theme-content" : ""}`}>Is loading....</p>}
        {!isLoading && (meals === null) && (
          <p className={`no-results-design ${darkTheme ? "search-dark-theme-content" : ""}`}>No results...(try another name)</p>
        )}
        {!isLoading && (meals !== null) && (
          <MealsContainer>
            {meals.map((meal) => (
              <MealItem
                key={meal.idMeal}
                image={meal.strMealThumb}
                title={meal.strMeal}
                onClick={() => navigate(`/detail/${meal.idMeal}`)}
                onDelete={() => onDeleteHandler(meal.idMeal)}
              />
            ))}
          </MealsContainer>
        )}
      </div>
    </div>
  );
};

export default SearchMeal;
