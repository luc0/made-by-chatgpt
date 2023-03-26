// Creamos el elemento de video
const video = document.createElement('video');

// Establecemos las propiedades necesarias para que el video llene la pantalla y se centre
video.style.position = 'fixed';
video.style.top = '0';
video.style.left = '0';
video.style.width = '100%';
video.style.height = '100%';
video.style.objectFit = 'cover';
video.style.zIndex = '-1';

// Creamos el elemento de texto
const text = document.createElement('div');
text.style.position = 'fixed';
text.style.top = '50%';
text.style.left = '50%';
text.style.transform = 'translate(-50%, -50%)';
text.style.color = 'white';
text.style.fontSize = '3em';
text.style.textAlign = 'center';
text.style.textShadow = '2px 2px #000';
text.style.zIndex = '1';

// Añadimos los elementos al body
document.body.appendChild(video);
document.body.appendChild(text);

// Hacemos la petición a la API de quotes
fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(data => {
    // Obtenemos una cita aleatoria
    const quote = data[Math.floor(Math.random() * data.length)];

    // Obtenemos la palabra más larga de la cita (sin signos)
    const longestWord = quote.text
      .replace(/[^\w\s]|_/g, '')
      .split(' ')
      .reduce((longest, current) => current.length > longest.length ? current : longest, '');

    // Hacemos la petición a la API de videos de Pexels
    fetch(`https://api.pexels.com/videos/search?query=${longestWord}&per_page=1&page=1`, {
      headers: {
        Authorization: 'ddjm8OIXvFDtgsNCCPWeH38zaZdgMymJGqe9rjrXfYfGKrKboUSiok62'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Obtenemos un video aleatorio
        const videoUrl = data.videos[Math.floor(Math.random() * data.videos.length)].video_files[0].link;

        // Establecemos la fuente del video
        video.src = videoUrl;

        // Añadimos el evento de carga del video para mostrar el spinner
        video.addEventListener('loadstart', () => {
          text.innerText = 'Loading...';
        });

        // Añadimos el evento de carga completa del video para mostrar la cita
        video.addEventListener('canplay', () => {
          text.innerText = `"${quote.text}" - ${quote.author}`;
        });

        // Iniciamos la carga del video
        video.load();
      })
      .catch(error => console.log(error));
  })
  .catch(error => console.log(error));
