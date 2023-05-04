import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './HomeScreen.css';

const HomeScreen = () => {
  const [shows, setShows] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleViewSummary = (id) => {
    history.push(`/summary/${id}`);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Show List</div>
      </nav>
      <div className="container">
        {shows.map(show => (
          <div key={show.show.id} className="show-container">
            <h2>{show.show.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: show.show.summary }}></p>
            <button onClick={() => handleViewSummary(show.show.id)}>
                View Summary
            </button>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
