

import  { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';   


const EventDetailsPage = () => {
   const { id } = useParams(); 
   const [ event , setEvent ] = useState(null);
    const [ error , setError ] = useState('');
     const [ loading, setLoading ] = useState(true);

     useEffect (() => {
      
     const token  = localStorage.getItem('token');

     fetch(`http://localhost:3001/api/events/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })

    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch Details");
      return res.json();

    })
    .then((data) => {
  setEvent(data);
  setLoading(false);
  console.log("Event ID from URL:", id);
  console.log("Fetched event:", data);
})
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
     }, [id])


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>No event found</p>;



  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center p-4">
      <div className="w-full max-w-2xl bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          {event.title}
        </h1>
        <p className="text-md font-medium text-gray-700 text-center mb-2">
          📅 {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-gray-800 text-lg leading-relaxed text-center">{event.description}</p>
      </div>
    </div>
  );
};
    
  


export default EventDetailsPage


  
