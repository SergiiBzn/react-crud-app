import { useState } from 'react';
import { useNavigate } from 'react-router';
import fetchWithAuth from '../api/auth';

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
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
      const response = await fetchWithAuth('http://localhost:3001/api/events', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Failed to create event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' onChange={handleChange} required />
      <textarea name='description' onChange={handleChange} required />
      <input name='date' type='date' onChange={handleChange} required />
      {error && <p>{error}</p>}
      <button type='submit'>Create</button>
    </form>
  );
};

export default CreateEvent;
