import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import Card from "../Card/Card";
import "./Movie.css";
export default function MovieList() {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const getData = async () => {
    const apikey = "4e44d9029b1270a757cddc766a1bcb63";
    const url = `http://api.themoviedb.org/3/movie/${
      type ? type : "popular"
    }?api_key=${apikey}&language=en-US`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        console.log(data);
      })
      .catch((error) => {
        if (error.response.status === "404") {
        }
      });
  };
  useEffect(() => {
    getData();
  }, [type]);
  return (
    <div className="movie_list">
      <h2 style={{ color: "white" }}>
        {type ? type.toUpperCase() : "POPULAR"}
      </h2>
      <div className="list_card">
        {data && data.map((movie, index) => <Card key={index} movie={movie} />)}
      </div>
      <Outlet />
    </div>
  );
}
