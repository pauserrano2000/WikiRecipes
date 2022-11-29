import "./MealItem.css";

const MealItem = (props) => {
  return (
    <div className="meal-item-design">
      <div onClick={props.onClick}>
        <img className="meal-image" src={props.image} alt={props.title} />
      </div>
      <div className="meal-title">{props.title}</div>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};
export default MealItem;
