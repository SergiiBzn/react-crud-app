import React from 'react'

const EventCard = () => {
  return (
<div className="card shadow-md bg-base-100">
  <div className="card-body">
    <h2 className="card-title">{event.title}</h2>
    <p>{event.description}</p>
    <div className="card-actions justify-end">
      <Link to={`/events/${event.id}`} className="btn btn-primary">Details</Link>
    </div>
  </div>
</div>

  )
}

export default EventCard
