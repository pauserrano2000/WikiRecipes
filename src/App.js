import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import Meals from "./Containers/Meals/Meals";
import DetailMeal from "./Containers/DetailMeal/DetailMeal";
import AddMeal from "./Containers/AddMeal/AddMeal";
import SearchMeal from "./Containers/SearchMeal/SearchMeal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/detail/:mealId" element={< DetailMeal />} />  {/*Use route params*/ }
          {/* <Route path="/add" element={< AddMeal />} />  */}
          <Route path="/search" element={< SearchMeal />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
