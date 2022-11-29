import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-design">
      <h1 className="title">WikiRecipes</h1>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active-link-design" : "link-design"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/meals"
        className={({ isActive }) =>
          isActive ? "active-link-design" : "link-design"
        }
      >
        Meals
      </NavLink>
      <NavLink
        to="/add"
        className={({ isActive }) =>
          isActive ? "active-link-design" : "link-design"
        }
      >
        Add Meal
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive ? "active-link-design" : "link-design"
        }
      >
        Search 
      </NavLink>
    </div>
  );
};

export default Header;
