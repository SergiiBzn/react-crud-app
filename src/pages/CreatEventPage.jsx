import { useState } from 'react';
import { useNavigate } from 'react-router';
import fetchWithAuth from '../api/auth';

const CreateEvent = () => {
  const [form, setForm] = useState({
  title: '',
  description: '',
  date: '',
  location: '',
  latitude: '',
  longitude: '',
});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('token');

  if (!token) {
    setError('You are not authorized');
    return;
  }

  try {
    const userId = localStorage.getItem('userId');

const payload = {
  ...form,
  date: new Date(form.date).toISOString(),
  latitude: parseFloat(form.latitude),
  longitude: parseFloat(form.longitude),
  organizerId: parseInt(userId), 
};
    const response = await fetchWithAuth('http://localhost:3001/api/events/get_api_events', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
     
    
      throw new Error('Failed to create event');
    }

    navigate('/');
  } catch (err) {
    console.error(' Error in handleSubmit:', err);
    setError('Failed to create event');
  }
};


  return (
<div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  }}>
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '300px',
      }}
    >
      <input
        name='title'
        value={form.title}
        onChange={handleChange}
        placeholder='Title'
        required
      />
      <textarea
        name='description'
        value={form.description}
        onChange={handleChange}
        placeholder='Description'
        required
      />
      <input
        name='date'
        type='date'
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
  name='location'
  value={form.location}
  onChange={handleChange}
  placeholder='Location'
  required
/>

<input
  name='latitude'
  type='number'
  value={form.latitude}
  onChange={handleChange}
  placeholder='Latitude'
  required
/>

<input
  name='longitude'
  type='number'
  value={form.longitude}
  onChange={handleChange}
  placeholder='Longitude'
  required
/>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type='submit'>Create</button>
    </form>
  </div>
);
};

export default CreateEvent;
