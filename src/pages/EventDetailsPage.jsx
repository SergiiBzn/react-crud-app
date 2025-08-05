

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
    <div>
       <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600 mb-2">
        Date: {new Date(event.date).toLocaleDateString()}
      </p>
      <p>{event.description}</p>
    </div>
    </div>
  )
}

export default EventDetailsPage


  
