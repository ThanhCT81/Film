import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieList from "../../MovieList/MovieList";
export default function Home() {
  return (
    <>
      <MovieList />
    </>
  );
}
