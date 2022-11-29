import "./MealsContainer.css";

const MovieContainer = (props) => {
    return( 
        <div className="meals-container-design">
            {props.children}
        </div>
    )
};

export default MealsContainer;