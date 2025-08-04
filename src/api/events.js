import { useState, useEffect } from "react";

const EventListPage = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/events")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch events");
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch((err) => setError(err.message));
  }, []);
  if (error) return <div>{error}</div>;

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div>
      {sortedEvents.map((event) => (
        <div key={events.id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventListPage;
