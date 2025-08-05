import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 

const EventListPage = () => {
  const [events, setEvents] = useState([]); 
  const [loading, setLoading] = useState(true); // Zeigt an, ob die Seite noch lädt
  const [error, setError] = useState(null); // Speichert Fehlermeldung, 

useEffect(() => {
  const token = localStorage.getItem("token");
  console.log("Token used:", token); // ✅ check token

  fetch('http://localhost:3001/api/events', {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  })
    .then(res => {
      console.log("Response status:", res.status);
      if (!res.ok) throw new Error('Failed to fetch events');
      return res.json();
    })
    .then(data => {
      console.log("Fetched events data:", data); // ✅ Show fetched data
      const sortedEvents = data.results.sort((a, b) => new Date(a.date) - new Date(b.date));
      setEvents(sortedEvents);
      setLoading(false);
    })
    .catch(err => {
      console.error("Error fetching events:", err.message); // ✅ Show any errors
      setError(err.message);
      setLoading(false);
    });
}, []);


  if (loading) return <p>Loading Event...</p>; // Zeigt "Loading" wenn Daten noch nicht geladen sind
  if (error) return <p>Error: Something wrong!: {error}</p>; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     
      {events.map(event => (
        <Link
          key={`${event.title}-${event.date}`}
          to={`/events/${event.id}`} // Link zu der Detailseite vom Event
          className="border p-4 rounded shadow hover:bg-gray-100"
        >
          <h3 className="font-bold">{event.title}</h3> {/* Titel */}
          <p>{new Date(event.date).toLocaleDateString()}</p> 
          <p>{event.description.substring(0, 100) ?? 'Keine Beschreibung verfügbar'}...</p> {/* Vorschau vom Text (max 100 Zeichen) */}
        </Link>
      ))}
    </div>
  );
};

export default EventListPage;
