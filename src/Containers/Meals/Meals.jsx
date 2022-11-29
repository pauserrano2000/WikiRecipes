import "./Meals.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getMeals } from "../../services/apicalls";

import MealsContainer from "../../Components/MealsContainer/MealsContainer";
import MealItem from "../../Components/MealItem/MealItem";

const Meals = () => {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState("Beef");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMeals(category)
      .then((res) => setMeals(res.data.results))
      .catch((error) => console.log(error));
    setIsLoading(false)
  }, []);

  const onDeleteHandler = (mealId) => {
    seatMeals((prevState)=>prevState.filter(meal => meal.idMeal!==mealId));
  };

  return (
    <div className="meals-design">
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
