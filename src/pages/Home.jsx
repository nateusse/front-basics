import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Search from '../components/Search';
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
          console.log("Fetched data:", data);
          localStorage.setItem('restaurants', JSON.stringify(data));
          setRestaurants(data);
        })
        .catch(console.error);
    } else {
      setRestaurants(JSON.parse(stored));
    }
  }, []);
  const searchTerm = search.toLowerCase().trim();
  const filteredRestaurants = restaurants.filter(r =>
  r.name.toLowerCase().includes(searchTerm) ||
  r.type.toLowerCase().includes(searchTerm) ||
  r.address.toLowerCase().includes(searchTerm)
);

  const viewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <main>
        <h1>Restaurants</h1>
        <Search value={search} onChange={setSearch} />
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