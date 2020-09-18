
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const AddMovie = () => {
  let history = useHistory();
  const [formInputs, setFormInputs] = useState({
    id: new Date(),
  });

  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleStarsChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value.split(",") });
  }

  const handleSubmit = (e) => {
    debugger;
    axios
      .post(`http://localhost:5000/api/movies/`, formInputs)
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="movie-card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input
          type="text"
          name="title"
          value={formInputs.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Director: </label>
        <input
          type="text"
          name="director"
          value={formInputs.director}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Metascore: </label>
        <input
          type="text"
          name="metascore"
          value={formInputs.metascore}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Stars: </label>
        <input
          type="text"
          name="stars"
          value={formInputs.stars}
          onChange={handleStarsChange}
        />
        {/* <br />
        <br />
        <label htmlFor="">id: </label>
        <input
          type="text"
          name="id"
          value={formInputs.id}
          onChange={handleChange}
        /> */}
        <div className="save-button" onClick={handleSubmit}>
          Add Movie
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
