// Array de frases inteligentes con autor
var frases = [
  {
    texto: "La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir avanzando.",
    autor: "Albert Einstein"
  },
  {
    texto: "La libertad no es la ausencia de compromisos, sino la capacidad de elegir.",
    autor: "Paulo Coelho"
  },
  {
    texto: "La felicidad no es algo hecho. Viene de tus propias acciones.",
    autor: "Dalai Lama"
  },
  {
    texto: "No hay viento favorable para el que no sabe a dónde va.",
    autor: "Séneca"
  }
];

// Función que elige al azar un gif o video para establecer como fondo
function establecerFondo() {
  // Generar número aleatorio entre 1 y 2 para seleccionar al azar gif o video
  var aleatorio = Math.floor(Math.random() * 2) + 1;

  // Si se selecciona el gif, establecer como fondo
  if (aleatorio === 1) {
    document.body.style.backgroundImage = "url('ruta/al/gif')";
  }
  // Si se selecciona el video, establecer como fondo
  else {
    var video = document.createElement("video");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("muted", "");
    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    var source = document.createElement("source");
    source.setAttribute("src", "ruta/al/video");
    video.appendChild(source);
    document.body.appendChild(video);
  }
}

// Función que muestra una frase inteligente en el centro de la pantalla
function mostrarFrase() {
  // Generar número aleatorio para seleccionar una frase al azar
  var indice = Math.floor(Math.random() * frases.length);
  var frase = frases[indice];

  // Crear elemento div para mostrar frase
  var div = document.createElement("div");
  div.style.position = "fixed";
  div.style.top = "50%";
  div.style.left = "50%";
  div.style.transform = "translate(-50%, -50%)";
  div.style.textAlign = "center";
  div.style.color = "#fff";
  div.style.fontFamily = "Arial, sans-serif";
  div.style.fontSize = "2.5em";
  div.innerHTML = '"' + frase.texto + '"<br>- ' + frase.autor;

  document.body.appendChild(div);
}

// Llamamos a las funciones para establecer el fondo y mostrar la frase al cargar la página
establecerFondo();
mostrarFrase();
