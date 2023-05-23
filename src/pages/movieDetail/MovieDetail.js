import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./MovieDetail.css";
export default function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const getData = async () => {
    const url = `http://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="movie">
      <div className="movie_intro">
        <img
          className="movie_backdrop"
          src={`https://image.tmdb.org/t/p/original${
            data ? data.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie_detail">
        <div className="movie_detailLeft">
          <div className="movie_posterBox">
            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/original${
                data ? data.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie_detailRight">
          <div className="movie_detailRightTop">
            <div className="movie_name">{data ? data.original_title : ""}</div>
            <div className="movie_tagline">{data ? data.tagline : ""}</div>
            <div className="movie_rating">
              {data ? data.vote_average : ""}
              <span className="movie_voteCount">
                {data ? "(" + data.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie_runtime">
              {data ? data.runtime + "mins" : ""}
            </div>
            <div className="movie_releaseDate">
              {data ? "Release data: " + data.release_date : ""}
            </div>
            <div className="movie_genres">
              {data && data.genres
                ? data.genres.map((genre) => (
                    <>
                      <span className="movie_genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie_detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{data ? data.overview : ""}</div>
          </div>
        </div>
        <div className="movie_link">
          <div className="movie_heading"></div>
          {data && data.homepage && (
            <a
              href={data.homepage}
              target="_blank"
              style={{ textDecoration: "none" }}
            ></a>
          )}
        </div>
      </div>
    </div>
  );
}
