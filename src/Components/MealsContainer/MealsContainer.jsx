import "./MealsContainer.css";

const MealsContainer = (props) => {
    return( 
        <div className="meals-container-design">
            {props.children}
        </div>
    )
};

export default MealsContainer;