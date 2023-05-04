import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './BookingScreen.css';

const BookingScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [movieTime, setMovieTime] = useState('');
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('movieTime', movieTime);
    history.push('/confirmation');
  };

  return (
    <div className="container">
      <h1>Booking Information</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

        <label htmlFor="movieTime">Movie Time</label>
        <select id="movieTime" value={movieTime} onChange={e => setMovieTime(e.target.value)} required>
          <option value="">Select a time</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="9:00 PM">9:00 PM</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingScreen;
