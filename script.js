// Creamos un nuevo botón y lo agregamos al cuerpo del documento
var boton = document.createElement("button");
boton.innerHTML = "Cambiar Fondo";
document.body.appendChild(boton);

// Función que cambia el color de fondo al azar
function cambiarFondo() {
  var colores = ['#FF5733', '#C70039', '#900C3F', '#581845', '#4B0082', '#00FF7F', '#FFFF00'];
  var indice = Math.floor(Math.random() * colores.length);
  document.body.style.backgroundColor = colores[indice];
}

// Agregamos un event listener al botón para llamar a la función cambiarFondo() cuando se haga clic en él
boton.addEventListener("click", cambiarFondo);
