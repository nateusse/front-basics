import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './RestaurantDetails.css';

const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const docRef = doc(db, 'restaurants', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setRestaurant(docSnap.data());
        } else {
          alert('Restaurant not found');
          navigate('/');
        }
      } catch (error) {
        console.error('❌ Error fetching restaurant:', error);
        alert('Error loading restaurant');
        navigate('/');
      }
    };

    fetchRestaurant();
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

  if (!restaurant) return <p>Loading...</p>;

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
