document.getElementById('restaurantForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const type = document.getElementById('type').value;
    const photoInput = document.getElementById('photo').value.trim();

    const defaultPhoto = 'https://cdn.sanity.io/images/bs9rmafh/main/01d3971a4ed2b314478887f8585cd22b2799e1d2-2335x3500.jpg?w=2335&h=3500&auto=format'; 

    if (!name || !address || !type) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    const photo = validator.isURL(photoInput, { protocols: ['http', 'https'], require_protocol: true }) 
        ? photoInput 
        : defaultPhoto;

    const newRestaurant = {
        id: Date.now(),
        name,
        address,
        type,
        photo
    };

    const restaurants = JSON.parse(localStorage.getItem('restaurants') || '[]');
    restaurants.push(newRestaurant);
    localStorage.setItem('restaurants', JSON.stringify(restaurants));

    alert('¡Restaurante agregado exitosamente!');
    window.location.href = '../index.html';
});