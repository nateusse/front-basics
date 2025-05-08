document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('restaurants') || JSON.parse(localStorage.getItem('restaurants')).length === 0) {
      console.log('No hay datos en localStorage. Cargando desde data.json...');
      fetch('data.json')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Error al cargar data.json');
              }
              return response.json();
          })
          .then(data => {
              localStorage.setItem('restaurants', JSON.stringify(data));
              console.log('Datos cargados desde data.json:', data); 
              renderRestaurants(); 
          })
          .catch(error => console.error('Error al cargar data.json:', error));
  } else {
      console.log('Cargando datos desde localStorage.');
      renderRestaurants(); 
  }
});

function renderRestaurants() {
  const list = JSON.parse(localStorage.getItem('restaurants') || '[]');
  console.log('Restaurantes a renderizar:', list); 

  const container = document.getElementById('container');
  container.innerHTML = ''; 

  list.forEach(r => {
      const card = document.createElement('div');
      card.className = 'card';

      const photoUrl = r.photo || 'https://cdn.sanity.io/images/bs9rmafh/main/01d3971a4ed2b314478887f8585cd22b2799e1d2-2335x3500.jpg?w=2335&h=3500&auto=format'; 

      card.innerHTML = `
          <h2>${r.name}</h2>
          <img src="${photoUrl}" alt="Photo of ${r.name}" class="photo">
          <p><strong>${r.type}</strong></p>
          <p><i>${r.address}</i></p>
          <button onclick="viewDetails(${r.id})">Menu</button>
      `;

      container.appendChild(card);
  });
}

function viewDetails(id) {
  if (id) {
      window.location.href = `views/details.html?id=${id}`;
  } else {
      console.error('ID no válido');
  }
}