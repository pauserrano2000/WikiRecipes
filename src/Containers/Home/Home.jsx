import "./Home.css";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-design">
      <h1 className="content-design">WELCOME TO WIKIRECIPES!</h1>
      <div className="button-container-design">
        <div className="button-design" onClick={(e)=> navigate("/meals")}>See the most popular recipes</div>{" "}
        <div className="button-design" onClick={(e)=> navigate("/search")}>Search for your favorite neals</div>{" "}
        <div className="button-design" onClick={(e)=> navigate("/search")}>Add your own recipe</div>{" "}
      </div>
    </div>
  );
};
export default Home;
