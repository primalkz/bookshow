import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './SummaryScreen.css'; // import the CSS file

const SummaryScreen = ({ match }) => {
  const [summary, setSummary] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${match.params.id}`)
      .then(response => {
        setSummary(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [match.params.id]);

  const handleBooking = () => {
    localStorage.setItem('movieName', summary.name);
    localStorage.setItem('movieDetails', JSON.stringify(summary));
    history.push('/booking');
  };

  return (
    <div>
      <nav className="navbar">{summary.name}</nav>
      <div className="container">
      <p dangerouslySetInnerHTML={{ __html: summary.summary }}></p>
              <button onClick={handleBooking}>Book</button>
      </div>
    </div>
  );
};

export default SummaryScreen;
