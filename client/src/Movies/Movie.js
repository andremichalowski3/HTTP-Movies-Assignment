import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { push } = useHistory();
  const history = useHistory();
  
  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // const updateMovie = e => {
  //   e.preventDefault();
  //   console.log(e);
  //   onClick={() => push(`/update-movie/${item.id}`)}
  //   // <Link path={`/update-movie/${id}`} />

  // ....? this.props.history.push(`/update-movie/${this.props.match.params.id}`)
  // ....? <Link to={`/update-movie/${params.id}`}>
        // <div className="edit-button">Edit</div>
        // </Link>

  // }

  const deleteMovie = () => {
    axios
      .delete(`http://localhost:5000/api/movies/${params.id}`)
      .then((res) => history.push("/"))
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>

      <div className="edit-button" onClick={() => push(`/update-movie/${movie.id}`)}>
        {/* Is this ^^^ a route or a link to the route in "push" case? */}
        Edit
      </div>

      <div className="delete-button" onClick={deleteMovie}>
        Delete
      </div>

    </div>
  );
}

export default Movie;
