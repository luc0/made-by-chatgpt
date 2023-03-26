// Array con las frases y autores
var frases = [
  { texto: "La creatividad es la inteligencia divirtiéndose", autor: "Albert Einstein" },
  { texto: "No hay viento favorable para quien no sabe a dónde va", autor: "Séneca" },
  { texto: "El éxito es la suma de pequeños esfuerzos repetidos día tras día", autor: "Robert Collier" },
  { texto: "El que quiere hacer algo encuentra un medio, el que no quiere hacer nada encuentra una excusa", autor: "Proverbio Árabe" },
  { texto: "El miedo es una ilusión", autor: "Michael Jordan" },
  { texto: "Nunca permitas que la educación te impida aprender algo", autor: "Mark Twain" }
];

// Array con los gifs y videos
var multimedia = [
  { tipo: "gif", url: "https://media.giphy.com/media/l46Ct9mZ1cpolylp6/giphy.gif" },
  { tipo: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { tipo: "gif", url: "https://media.giphy.com/media/VeE6XlUAVxNiU/giphy.gif" },
  { tipo: "video", url: "https://www.w3schools.com/html/movie.mp4" }
];

// Función que elige un elemento aleatorio de un array
function aleatorio(array) {
  var indice = Math.floor(Math.random() * array.length);
  return array[indice];
}

// Función que cambia el fondo a un gif o video aleatorio, y muestra una frase en el centro
function cambiarFondo() {
  // Elegir un elemento aleatorio del array de multimedia
  var elementoMultimedia = aleatorio(multimedia);

  // Crear un elemento HTML para el gif o video y agregarlo al cuerpo de la página
  if (elementoMultimedia.tipo === "gif") {
    var multimediaHTML = document.createElement("img");
    multimediaHTML.src = elementoMultimedia.url;
  } else if (elementoMultimedia.tipo === "video") {
    var multimediaHTML = document.createElement("video");
    multimediaHTML.src = elementoMultimedia.url;
    multimediaHTML.autoplay = true;
    multimediaHTML.loop = true;
    multimediaHTML.muted = true;
  }

  multimediaHTML.style.position = "absolute";
  multimediaHTML.style.width = "100%";
  multimediaHTML.style.height = "100%";
  multimediaHTML.style.top = "0";
  multimediaHTML.style.left = "0";
  document.body.appendChild(multimediaHTML);

  // Elegir una frase aleatoria del array de frases
  var frase = aleatorio(frases);

  // Crear un elemento HTML para la frase y agregarlo al cuerpo de la página
  var fraseHTML = document.createElement("div");
  fraseHTML.innerHTML = "<p>" + frase.texto + "</p><p><em>" + frase.autor + "</em></p>";
  fraseHTML.style.position = "absolute";
  fraseHTML.style.top = "50%";
  fraseHTML.style.left = "50%";
  fraseHTML.style.transform = "translate(-50%, -50%)";
  fraseHTML.style.textAlign = "center
