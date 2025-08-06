import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <Link
      to={`/events/${event.id}`}
      className="block  mt-15 bg-white/60 backdrop-blur-md shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
    >
      <h3 className=" text-3xl font-semibold text-blue-900 mb-2">{event.title}</h3>
      <p className="text-sm text-gray-500">
        📅 {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="text-gray-700 mt-2">
        {event.description?.substring(0, 100) ?? 'Keine Beschreibung verfügbar'}...
      </p>
    </Link>
  );
};

export default EventCard;
