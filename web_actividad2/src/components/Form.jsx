import React, { useState } from 'react';
import validator from 'validator';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    type: '',
    photo: '',
  });

  const defaultPhoto =
    'https://cdn.sanity.io/images/bs9rmafh/main/01d3971a4ed2b314478887f8585cd22b2799e1d2-2335x3500.jpg?w=2335&h=3500&auto=format';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, type, photo } = formData;

    if (!name || !address || !type) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const validatedPhoto = validator.isURL(photo, { protocols: ['http', 'https'], require_protocol: true })
      ? photo
      : defaultPhoto;

    const newRestaurant = {
      id: Date.now(),
      name,
      address,
      type,
      photo: validatedPhoto,
    };

    const restaurants = JSON.parse(localStorage.getItem('restaurants') || '[]');
    restaurants.push(newRestaurant);
    localStorage.setItem('restaurants', JSON.stringify(restaurants));

    alert('¡Restaurante agregado exitosamente!');
    window.location.href = '/'; // Cambia a la ruta de tu Home si usas react-router
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} />

      <label htmlFor="type">Type</label>
      <select id="type" name="type" required value={formData.type} onChange={handleChange}>
        <option value="" disabled>Select a type</option>
        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
        <option value="Mexican">Mexican</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Vietnamese">Vietnamese</option>
        <option value="Peruvian">Peruvian</option>
      </select>

      <label htmlFor="photo">Image URL</label>
      <input type="url" id="photo" name="photo" required value={formData.photo} onChange={handleChange} />

      <button type="submit">Save Restaurant</button>
    </form>
  );
};

export default Form;
