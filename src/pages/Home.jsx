import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import './Home.css';

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('restaurants');
    if (!stored || JSON.parse(stored).length === 0) {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('restaurants', JSON.stringify(data));
          setRestaurants(data);
        })
        .catch(console.error);
    } else {
      setRestaurants(JSON.parse(stored));
    }
  }, []);

  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  const viewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <main>
        <h1>Restaurants</h1>
        <input
          type="text"
          id="search"
          placeholder="Search restaurants..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div id="container">
          {filteredRestaurants.map(r => (
            <Card key={r.id} restaurant={r} onViewDetails={viewDetails} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
