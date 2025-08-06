import { useState } from 'react';
import { useNavigate } from 'react-router';
import fetchWithAuth from '../api/auth';

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    organizerId: 1,
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
      setError('Kein Authorization!');
      return;
    }

    const { title, description, date, location, organizerId } = form;
    if (!title || !description || !date || !location || !organizerId) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetchWithAuth('http://localhost:3001/api/events', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Failed to create event');
      }

      navigate('/');
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
    setForm({
      title: '',
      description: '',
      date: '',
      location: '',
    });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'
      >
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Create New Event
        </h2>

        {error && (
          <p className='text-red-500 text-sm mb-4 text-center'>{error}</p>
        )}

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='title'
          >
            Title
          </label>
          <input
            id='title'
            name='title'
            onChange={handleChange}
            value={form.title}
            required
            className='shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
            placeholder='Event title'
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            id='description'
            name='description'
            onChange={handleChange}
            value={form.description}
            className='shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
            placeholder='Event description'
          />
        </div>

        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='date'
          >
            Date
          </label>
          <input
            id='date'
            name='date'
            type='date'
            onChange={handleChange}
            value={form.date}
            required
            className='shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='location'
          >
            Location
          </label>
          <input
            id='location'
            name='location'
            onChange={handleChange}
            value={form.location}
            required
            className='shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
            placeholder='Event location'
          />
        </div>

        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
