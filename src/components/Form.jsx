import React, { useState } from 'react';
import validator from 'validator';
import { postRestaurant } from '../services/postRestaurant';
import '../pages/NewRestaurant.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    type: '',
    photo: '',
    menu: {
      appetizers: [],
      mainCourses: [],
      desserts: [],
      drinks: [],
    },
  });

  const defaultPhoto =
    'https://cdn.sanity.io/images/bs9rmafh/main/01d3971a4ed2b314478887f8585cd22b2799e1d2-2335x3500.jpg?w=2335&h=3500&auto=format';

  const [currentItem, setCurrentItem] = useState({
    section: 'appetizers',
    name: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    if (name === 'section') {
      setCurrentItem((prev) => ({ ...prev, section: value }));
    } else if (name === 'itemName') {
      setCurrentItem((prev) => ({ ...prev, name: value }));
    } else if (name === 'price') {
      setCurrentItem((prev) => ({ ...prev, price: value }));
    }
  };

  const addMenuItem = () => {
    const { section, name, price } = currentItem;
    if (!name || price === '') {
      alert('Completa nombre y precio.');
      return;
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber) || priceNumber < 0) {
      alert('El precio debe ser un número positivo.');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      menu: {
        ...prev.menu,
        [section]: [...prev.menu[section], { name, price: priceNumber }],
      },
    }));

    setCurrentItem({ ...currentItem, name: '', price: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address, type, photo, menu } = formData;

    if (!name || !address || !type) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const validatedPhoto = validator.isURL(photo, {
      protocols: ['http', 'https'],
      require_protocol: true,
    })
      ? photo
      : defaultPhoto;

    const newRestaurant = {
      name,
      address,
      type,
      photo: validatedPhoto,
      menu,
    };

    try {
      await postRestaurant(newRestaurant);
      alert('¡Restaurante agregado exitosamente!');
      window.location.href = '/';
    } catch (error) {
      console.error('❌ Error al guardar en Firestore:', error);
      alert('Hubo un problema al guardar el restaurante.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" required value={formData.name} onChange={handleChange} />

      <label>Address</label>
      <input type="text" name="address" required value={formData.address} onChange={handleChange} />

      <label>Type</label>
      <select name="type" required value={formData.type} onChange={handleChange}>
        <option value="" disabled>Select a type</option>
        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
        <option value="Mexican">Mexican</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Vietnamese">Vietnamese</option>
        <option value="Peruvian">Peruvian</option>
      </select>

      <label>Image URL</label>
      <input type="url" name="photo" value={formData.photo} onChange={handleChange} />

      <h3>Menu</h3>

      <label>Section</label>
      <select name="section" value={currentItem.section} onChange={handleItemChange}>
        <option value="appetizers">Appetizers</option>
        <option value="mainCourses">Main Courses</option>
        <option value="desserts">Desserts</option>
        <option value="drinks">Drinks</option>
      </select>

      <label>Item name & Price</label>
      <div className="input-row">
        <input
          type="text"
          name="itemName"
          placeholder="e.g. Spring rolls"
          value={currentItem.name}
          onChange={handleItemChange}
        />
        <input
          type="text"
          name="price"
          placeholder="e.g. 2.50"
          value={currentItem.price}
          onChange={handleItemChange}
          className={parseFloat(currentItem.price) < 0 ? 'error' : ''}
        />
      </div>
      {currentItem.price && parseFloat(currentItem.price) < 0 && (
        <p className="error-message">El precio debe ser positivo.</p>
      )}

      <button type="button" onClick={addMenuItem}>Add Item to Menu</button>

      <h4>Current Menu</h4>
      {['appetizers', 'mainCourses', 'desserts', 'drinks'].map((section) => (
        <div key={section}>
          <strong>{section}</strong>
          <ul>
            {formData.menu[section].map((item, idx) => (
              <li key={idx}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      ))}

      <button type="submit">Save Restaurant</button>
    </form>
  );
};

export default Form;