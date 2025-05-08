document.addEventListener("DOMContentLoaded", async () => {
    const toggleBtn = document.getElementById("toggleDark");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  
    const response = await fetch("data.json");
    const data = await response.json();
  
    // Formación
    const formacionSection = document.querySelector("#formacion table");
    data.formacion.forEach(row => {
      const tr = document.createElement("tr");
      row.forEach(col => {
        const td = document.createElement("td");
        td.textContent = col;
        tr.appendChild(td);
      });
      formacionSection.appendChild(tr);
    });
  
    // Experiencia
    const tablaExperiencia = document.getElementById("tabla-experiencia");
    data.experiencia.forEach(({ empresa, cargo, descripcion, periodo }) => {
      const tr = document.createElement("tr");
      [empresa, cargo, descripcion, periodo].forEach(texto => {
        const td = document.createElement("td");
        td.textContent = texto;
        tr.appendChild(td);
      });
      tablaExperiencia.appendChild(tr);
    });
  
    // Redes
    const redesContainer = document.querySelector(".redes-links");
    data.redes.forEach(({ nombre, url, icono, color }) => {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.className = "icon-link";
  
      const i = document.createElement("i");
      i.className = icono;
      i.style.color = color;
      a.appendChild(i);
  
      const span = document.createElement("span");
      span.textContent = nombre;
      a.appendChild(span);
  
      redesContainer.appendChild(a);
    });
  
    // Formulario
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const mensaje = document.getElementById("mensaje").value;
  
      if (nombre && mensaje) {
        alert(`Gracias por tu mensaje, ${nombre}. ¡Te contactaremos pronto!`);
        this.reset();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  });
  const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});