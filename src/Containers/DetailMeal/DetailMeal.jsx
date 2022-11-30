import "./DetailMeal.css";

import { useEffect, useState } from "react";
import { useDarkThemeContext } from "../../Context/theme-context";
import { getMealDetails } from "../../services/apicalls";
import { useParams } from "react-router-dom";

const DetailMeal = () => {
  const { darkTheme } = useDarkThemeContext();
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMealDetails(mealId)
      .then((res) => {
        if (res.data.meals === null) {
          setMealDetails(res.data.meals);
        } else {
          setMealDetails(res.data.meals[0]);
        }
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);

  const separateLines = mealDetails?.strInstructions?.split("\r\n");

  return (
    <div
      className={`detail-meal-design ${
        darkTheme ? "detail-dark-theme-background" : ""
      } `}
    >
      {isLoading && (
        <p
          className={`loading-design ${
            darkTheme ? "detail-dark-theme-content" : ""
          }`}
        >
          Is loading....
        </p>
      )}
      {!isLoading && mealDetails === null && (
        <p
          className={`no-results-design ${
            darkTheme ? "detail-dark-theme-content" : ""
          }`}
        >
          No results...(try another name)
        </p>
      )}
      {!isLoading && mealDetails !== null && (
        <>
          <div className="title-design">
            <h1
              className={`title-design-content ${
                darkTheme ? "detail-dark-theme-content" : ""
              }`}
            >
              {mealDetails.strMeal}
            </h1>
          </div>
          <div className="columns-container">
            <div className="left-container">
              <div className="category-design">
                <h2
                  className={`category-content-design ${
                    darkTheme ? "detail-dark-theme-content" : ""
                  }`}
                >
                  Origin Country: {mealDetails.strArea}
                </h2>
                <h2
                  className={`category-content-design ${
                    darkTheme ? "detail-dark-theme-content" : ""
                  }`}
                >
                  Category: {mealDetails.strCategory}
                </h2>
                <a
                  className={`category-content-design ${
                    darkTheme ? "detail-dark-theme-content" : ""
                  }`}
                  href={mealDetails.strYoutube}
                  target="_blank"
                >
                  Video tutorial
                </a>
              </div>
              <img
                className="detail-img"
                src={mealDetails.strMealThumb}
                alt={mealDetails.strMeal}
              />
            </div>
            <div className="right-container">
              <h2
                className={`title-right-design ${
                  darkTheme ? "detail-dark-theme-content" : ""
                }`}
              >
                Method
              </h2>
              <div
                className={`description-design ${
                  darkTheme ? "detail-dark-theme-content" : ""
                }`}
              >
                {separateLines?.map((line, index) => {
                  return <p className="description-content-design" key={index}>{line}</p>;
                })}
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default DetailMeal;
