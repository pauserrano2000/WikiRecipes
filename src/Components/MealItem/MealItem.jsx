import "./MealItem.css";
import { useDarkThemeContext } from "../../Context/theme-context";

const MealItem = (props) => {
  const { darkTheme} = useDarkThemeContext();
  return (
    <div className={`meal-item-design ${darkTheme ? "item-dark-theme-container" : ""}`}>
      <div className="meal-container" onClick={props.onClick}>
        <img className="meal-image" src={props.image} alt={props.title} />
        <p className={`meal-title ${darkTheme ? "item-dark-theme-content" : ""} `}>{props.title}</p>
      </div>
      <button className={`item-button ${darkTheme ? "button-item-dark-theme" : ""} `} onClick={props.onDelete}>Remove</button>
    </div>
  );
};
export default MealItem;
