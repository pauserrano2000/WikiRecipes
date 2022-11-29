import "./Meals.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getMeals, getCategories } from "../../services/apicalls";

import MealsContainer from "../../Components/MealsContainer/MealsContainer";
import MealItem from "../../Components/MealItem/MealItem";

const Meals = () => {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("Beef"); //default category to search
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getMeals(category)
      .then((res) => setMeals(res.data.meals))
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, [category]);

  const onDeleteHandler = (mealId) => {
    setMeals((prevState) => prevState.filter((meal) => meal.idMeal !== mealId));
  };

  const selectHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="meals-design">
      {categories.length !== 0 && (
        <div className="select-container">
          <select className="select" value={category} onChange={selectHandler}>
            {categories.map((category) => (
              <option key={category.idCategory} value={category.strCategory}>
                {" "}
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
      )}
      {isLoading && <p className="loading-design">IS LOADING...</p>}
      {!isLoading && (
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
  );
};
export default Meals;
