import "./Header.css";
import { NavLink } from "react-router-dom";
import { useDarkThemeContext } from "../../Context/theme-context";

const Header = () => {
  const { darkTheme, toggleHandler } = useDarkThemeContext();

  return (
    <div
      className={`header-design ${darkTheme ? "dark-theme-background" : ""} `}
    >
      <h1 className={`title ${darkTheme ? "dark-theme-content" : ""}`}>WikiRecipes</h1>
      <div className="link-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              isActive ? "active-link-design" : "link-design",
              darkTheme ? "dark-theme-content" : "",
            ].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/meals"
          className={({ isActive }) =>
            [
              isActive ? "active-link-design" : "link-design",
              darkTheme ? "dark-theme-content" : "",
            ].join(" ")
          }
        >
          Meals
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            [
              isActive ? "active-link-design" : "link-design",
              darkTheme ? "dark-theme-content" : "",
            ].join(" ")
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            [
              isActive ? "active-link-design" : "link-design",
              darkTheme ? "dark-theme-content" : "",
            ].join(" ")
          }
        >
          Add meal
        </NavLink>
      </div>
      <input type="checkbox" id="switch" onChange={toggleHandler} />
      <label className="label-toggle" htmlFor="switch"></label>
    </div>
  );
};

export default Header;
