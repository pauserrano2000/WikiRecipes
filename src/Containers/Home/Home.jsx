import "./Home.css";
import { useDarkThemeContext } from "../../Context/theme-context";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { darkTheme} = useDarkThemeContext();

  return (
    <div className={`home-design ${darkTheme ? "home-dark-theme-background" : ""} `}>
      <h1 className={`content-design ${darkTheme ? "home-dark-theme-content" : ""} `}>WELCOME TO WikiRecipes!</h1>
      <div className="button-container-design">
        <div className={`button-design ${darkTheme ? "home-dark-theme-content home-button-dark-theme-background" : ""} `} onClick={(e)=> navigate("/meals")}>See all the recipes filtered by category</div>{" "}
        <div className={`button-design ${darkTheme ? "home-dark-theme-content home-button-dark-theme-background" : ""} `} onClick={(e)=> navigate("/search")}>Search for your favorite meals</div>{" "}
        <div className={`button-design ${darkTheme ? "home-dark-theme-content home-button-dark-theme-background" : ""} `} onClick={(e)=> navigate("/add")}>Add your own recipe</div>{" "}
      </div>
    </div>
  );
};
export default Home;
