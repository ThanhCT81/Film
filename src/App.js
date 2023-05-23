import Header from "./Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import MovieList from "./MovieList/MovieList";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/:type" element={<MovieList />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
