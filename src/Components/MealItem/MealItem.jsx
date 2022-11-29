import "./MealItem.css";

const MealItem = (props) => {
  return (
    <div className="meal-item-design" onClick={props.onClick}>
      <div>
        <img className="meal-image" src={'https://image.tmdb.org/t/p/original/'+props.image} alt={props.title} />
      </div>
      <div className="meal-title">{props.title}</div>
    </div>
  );
};
export default MealItem;
