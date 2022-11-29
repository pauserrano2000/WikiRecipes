import "./Home.css";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homeDesign">
      <h1 className="contentDesign">WELCOME TO WikiFilms!</h1>
      <div className="buttoncontainerDesign">
        <div className="buttonDesign" onClick={(e)=> navigate("/films")}>See the last popular movies</div>{" "}
        <div className="buttonDesign" onClick={(e)=> navigate("/search")}>Search for your favorite films</div>{" "}
      </div>
    </div>
  );
};
export default Home;
