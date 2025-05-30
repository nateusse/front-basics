import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantDetails.css';

const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const restaurants = JSON.parse(localStorage.getItem('restaurants') || '[]');
    const found = restaurants.find(r => r.id === parseInt(id, 10));

    if (!found) {
      alert('Restaurant not found');
      navigate('/');
      return;
    }

    setRestaurant(found);
  }, [id, navigate]);

  const renderMenuSection = (title, items = []) => (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name} - ${parseFloat(item.price).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );

  if (!restaurant) return null;

  return (
    <div className="restaurant-details">

      <h1>{restaurant.name}</h1>
      <h2>Menu</h2>

      <div id="menu">
        {renderMenuSection('Appetizers', restaurant?.menu?.appetizers)}
        {renderMenuSection('Main Courses', restaurant?.menu?.mainCourses)}
        {renderMenuSection('Desserts', restaurant?.menu?.desserts)}
        {renderMenuSection('Drinks', restaurant?.menu?.drinks)}
      </div>
    </div>
  );
};

export default RestaurantDetails;
