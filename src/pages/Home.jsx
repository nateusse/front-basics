// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Search from '../components/Search';
import { getRestaurants } from '../services/getRestaurants';
import './Home.css';

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getRestaurants()
      .then((data) => {
        setRestaurants(data);
      })
      .catch((err) => {
        console.error('❌ Error fetching restaurants from Firestore:', err);
      });
  }, []);

  const searchTerm = search.toLowerCase().trim();
  const filteredRestaurants = restaurants.filter((r) =>
  r?.name?.toLowerCase().includes(searchTerm) ||
  r?.type?.toLowerCase().includes(searchTerm) ||
  r?.address?.toLowerCase().includes(searchTerm)
);

  const viewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <main>
      <h1>Restaurants</h1>
      <Search value={search} onChange={setSearch} />
      <div id="container">
        {filteredRestaurants.map((r) => (
          <Card key={r.id} restaurant={r} onViewDetails={viewDetails} />
        ))}
      </div>
    </main>
  );
}

export default Home;
