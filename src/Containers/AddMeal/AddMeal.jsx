import "./AddMeal.css";
import { useState, useEffect } from "react";
import { useDarkThemeContext } from "../../Context/theme-context";
import { getCategories } from "../../services/apicalls";
import { errorCheck } from "../../services/validate";

const AddMeal = () => {
  const { darkTheme } = useDarkThemeContext();
  const [newMeal, setNewMeal] = useState({
    name: "",
    category: "",
    country: "",
    picture: "",
    video: "",
    instructions: "",
  });

  const [newMealError, setNewMealError] = useState({
    nameError: "",
    categoryError: "",
    countryError: "",
    pictureError: "",
    videoError: "",
    instructionsError: "",
  });

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [formReport, setFormReport] = useState('');

  const inputHandler = (e) => {
    setNewMeal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (e) => {
    let error = "";

    error = errorCheck(e.target.name, e.target.value);

    setNewMealError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((error) => console.log(error));
  }, []);

  const selectHandler = (event) => {
    setCategory(event.target.value);
    inputHandler(event);
  };

  const registerMe = () => {
    let error = "";

    const registerMe = () => {
        let error = "";

        if (newMeal.length !== 0 && error === "") {
            const convertido = JSON.stringify(newMeal);
            console.log(convertido);
            localStorage.setItem("dataNewMeal.json", convertido);
            let dataFromStorage = localStorage.getItem("dataNewMeal");
            let objetoReconvertido = JSON.parse(dataFromStorage);
            console.log(objetoReconvertido);
            setFormReport('The new Meal was created');
            console.log(formReport)
        } else {
            setFormReport('Please enter some data or/and solve the errors!!!');
            console.log(formReport)
        }
    }
  };

  return (
    <div
      className={`add-meal-design ${
        darkTheme ? "add-dark-theme-background" : ""
      } `}
    >
      <div className="form-design">
        <input
          placeholder="Name"
          type="name"
          name="name"
          className={
            newMealError.nameError === ""
              ? "basic-input"
              : "basic-input error-input"
          }
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => errorHandler(e)}
        />
        <div className="errorMsg">{newMealError.nameError}</div>

        <input
          placeholder="Origin Country"
          type="country"
          name="country"
          className={
            newMealError.countryError === ""
              ? "basic-input"
              : "basic-input error-input"
          }
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => errorHandler(e)}
        />
        <div className="errorMsg">{newMealError.countryError}</div>

        <input
          placeholder="Picture URL"
          type="picture"
          name="picture"
          className={
            newMealError.pictureError === ""
              ? "basic-input"
              : "basic-input error-input"
          }
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => errorHandler(e)}
        />
        <div className="errorMsg">{newMealError.pictureError}</div>

        <input
          placeholder="Video URL"
          type="video"
          name="video"
          className={
            newMealError.videoError === ""
              ? "basic-input"
              : "basic-input error-input"
          }
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => errorHandler(e)}
        />
        <div className="errorMsg">{newMealError.videoError}</div>

        <textarea
          placeholder="Method"
          type="instructions"
          name="instructions"
          className={
            newMealError.instructionsError === ""
              ? "basic-text"
              : "basic-text error-input"
          }
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => errorHandler(e)}
        />
        <div className="errorMsg">{newMealError.instructionsError}</div>
        {categories.length !== 0 && (
          <div className="custom-select">
            <select
              className="select"
              name="category"
              value={category}
              onChange={selectHandler}
            >
              {categories.map((category) => (
                <option key={category.idCategory} value={category.strCategory}>
                  {" "}
                  {category.strCategory}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="registerCardBottom">
          <div onClick={() => registerMe()} className="registerButton">
            Register
          </div>
          <div className="errorMsg">{formReport}</div>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
