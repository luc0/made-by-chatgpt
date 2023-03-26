// URL de la API de Pexels
const API_URL = 'https://api.pexels.com/videos/search?query=';
// API key de Pexels
const API_KEY = 'ddjm8OIXvFDtgsNCCPWeH38zaZdgMymJGqe9rjrXfYfGKrKboUSiok62';
// Palabras clave para la búsqueda de videos en Pexels
const PALABRAS_CLAVE = ['naturaleza', 'ciudad', 'viajes', 'arte'];

// Frases con autores correspondientes
const FRASES = [
  {
    frase: 'La vida es un viaje, disfrútalo.',
    autor: 'Socrates'
  },
  {
    frase: 'La creatividad es la inteligencia divirtiéndose.',
    autor: 'Albert Einstein'
  },
  {
    frase: 'No te rindas, el principio siempre es el más difícil.',
    autor: 'Proverbio japonés'
  },
  {
    frase: 'No hay nada más poderoso que una idea cuyo momento ha llegado.',
    autor: 'Victor Hugo'
  }
];

// Seleccionar una palabra clave al azar
const palabraClave = PALABRAS_CLAVE[Math.floor(Math.random() * PALABRAS_CLAVE.length)];

// Obtener un video al azar de Pexels con la palabra clave seleccionada
fetch(API_URL + palabraClave, {
  headers: {
    Authorization: API_KEY
  }
})
  .then(response => response.json())
  .then(data => {
    // Seleccionar un video al azar
    const video = data.videos[Math.floor(Math.random() * data.videos.length)];
    // Crear la etiqueta de video y establecer sus propiedades
    const videoTag = document.createElement('video');
    videoTag.src = video.video_files[0].link;
    videoTag.autoplay = true;
    videoTag.loop = true;
    videoTag.muted = true;
    videoTag.style.position = 'fixed';
    videoTag.style.top = '50%';
    videoTag.style.left = '50%';
    videoTag.style.minWidth = '100%';
    videoTag.style.minHeight = '100%';
    videoTag.style.width = 'auto';
    videoTag.style.height = 'auto';
    videoTag.style.objectFit = 'cover';
    videoTag.style.transform = 'translate(-50%, -50%)';
    // Agregar la etiqueta de video al cuerpo del documento
    document.body.appendChild(videoTag);
  })
  .catch(error => console.log(error));

// Seleccionar una frase al azar
const frase = FRASES[Math.floor(Math.random() * FRASES.length)];

// Crear la etiqueta de frase y establecer sus propiedades
const fraseTag = document.createElement('div');
fraseTag.innerHTML = `<h1 style="z-index:999;position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 5rem; text-align: center; color: white;">"${frase.frase}"<br>- ${frase.autor} -</h1>`;
// Agregar la etiqueta de frase al cuerpo del documento
document.body.appendChild(fraseTag);
