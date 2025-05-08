document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(params.get('id'), 10);

    if (!restaurantId) {
        alert('Invalid restaurant ID');
        window.location.href = '../index.html';
        return;
    }

    const restaurants = JSON.parse(localStorage.getItem('restaurants') || '[]');
    const restaurant = restaurants.find(r => r.id === restaurantId);

    if (!restaurant) {
        alert('Restaurant not found');
        window.location.href = '../index.html';
        return;
    }

    // Asignar solo el nombre del restaurante
    document.getElementById('restaurant-name').textContent = restaurant.name;

    // Omitir la dirección (eliminada de details.html)

    // Poblar el menú
    populateMenu('appetizers', restaurant.menu.appetizers);
    populateMenu('mainCourses', restaurant.menu.mainCourses);
    populateMenu('desserts', restaurant.menu.desserts);
    populateMenu('drinks', restaurant.menu.drinks);
});

function populateMenu(sectionId, items) {
    const section = document.getElementById(sectionId);
    section.innerHTML = ''; 

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        section.appendChild(li);
    });
}