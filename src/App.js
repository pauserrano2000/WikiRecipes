import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import Meals from "./Containers/Meals/Meals";
import DetailMeal from "./Containers/DetailMeal/DetailMeal";
import AddMeal from "./Containers/AddMeal/AddMeal";
import SearchMeal from "./Containers/SearchMeal/SearchMeal";
import ThemeContextProvider from "./Context/theme-context";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/detail/:mealId" element={<DetailMeal />} />
            <Route path="/search" element={<SearchMeal />} />
            <Route path="/add" element={<AddMeal />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
