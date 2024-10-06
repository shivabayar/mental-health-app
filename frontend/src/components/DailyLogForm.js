import React, { useState } from 'react';
import axios from 'axios';

const DailyLogForm = ({ userId }) => {
  const [log, setLog] = useState({
    mood_rating: '',
    anxiety_level: '',
    sleep_hours: '',
    physical_activity: '',
    social_interactions: '',
    stress_level: '',
    symptoms: ''
  });

  const handleChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4200/api/log', { ...log, user_id: userId });
    alert('Log submitted successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="mood_rating" placeholder="Mood Rating" onChange={handleChange} required />
      <input type="number" name="anxiety_level" placeholder="Anxiety Level" onChange={handleChange} required />
      <input type="number" name="sleep_hours" placeholder="Sleep Hours" onChange={handleChange} required />
      <input type="text" name="physical_activity" placeholder="Physical Activity" onChange={handleChange} required />
      <input type="number" name="social_interactions" placeholder="Social Interactions" onChange={handleChange} required />
      <input type="number" name="stress_level" placeholder="Stress Level" onChange={handleChange} required />
      <textarea name="symptoms" placeholder="Symptoms" onChange={handleChange} required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DailyLogForm;
