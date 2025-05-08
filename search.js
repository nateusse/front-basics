function renderRestaurants(filteredList = null) {
    const list = filteredList || JSON.parse(localStorage.getItem('restaurants') || '[]');
    const container = document.getElementById('container');
    container.innerHTML = ''; 
  
    list.forEach(r => {
      const card = document.createElement('div');
      card.className = 'card';
  
      card.innerHTML = `
        <h2>${r.name}</h2>
        <img src="${r.photo}" alt="Photo of ${r.name}" class="photo">
        <p><strong>${r.type}</strong></p>
        <p><i>${r.address}</i></p>
        <button onclick="viewDetails(${r.id})">Menu</button>
      `;
  
      container.appendChild(card);
    });
  }
  
  function filterRestaurants() {
    const query = document.getElementById('search').value.toLowerCase();
    const list = JSON.parse(localStorage.getItem('restaurants') || '[]');
    const filteredList = list.filter(r => 
      r.name.toLowerCase().includes(query) || 
      r.type.toLowerCase().includes(query) || 
      r.address.toLowerCase().includes(query)
    );
    renderRestaurants(filteredList);
  }