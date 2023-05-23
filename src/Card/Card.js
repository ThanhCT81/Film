import { Link } from "react-router-dom";
import "./Card.css";
import { AiOutlineStar } from "react-icons/ai";
export default function Card(props) {
  const { movie } = props;
  return (
    <div className="card_box">
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="cards">
          <img
            className="card_img"
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : ""
            }`}
          />
          <div className="card_overlay">
            <div className="card_title">
              {movie ? movie.original_title : ""}
            </div>
            <div className="card_runtime">
              {movie ? movie.release_date : ""}
              <span className="card_rating">
                {movie ? movie.vote_average : ""}
                <AiOutlineStar />
              </span>
            </div>
            <div className="card_description">
              {movie ? movie.overview.slice(0, 118) + "..." : ""}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
