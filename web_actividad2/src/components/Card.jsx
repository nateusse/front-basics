
function Card({ restaurant, onViewDetails }) {
  const { id, name, type, address, photo } = restaurant;

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={photo || 'https://cdn.sanity.io/images/bs9rmafh/main/01d3971a4ed2b314478887f8585cd22b2799e1d2-2335x3500.jpg'}
        alt={name}
        className="photo"
      />
      <p><strong>{type}</strong></p>
      <p><i>{address}</i></p>
      <button onClick={() => onViewDetails(id)}>Menu</button>
    </div>
  );
}

export default Card;
