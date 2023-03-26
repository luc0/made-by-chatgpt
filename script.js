const apiKey = '563492ad6f91700001000001018c8faaa9f4489f9cc36f386e11c2d1';
const gifContainer = document.body;
const phraseContainer = document.createElement('div');
phraseContainer.classList.add('phrase-container');
document.body.appendChild(phraseContainer);

// Obtener una frase aleatoria
const phrases = [
  { text: 'La simplicidad es la clave de la verdadera elegancia', author: 'Coco Chanel' },
  { text: 'La lógica te llevará de A a B. La imaginación te llevará a cualquier parte', author: 'Albert Einstein' },
  { text: 'La felicidad no es algo hecho. Viene de tus propias acciones', author: 'Dalai Lama' },
  { text: 'Sé el cambio que deseas ver en el mundo', author: 'Mahatma Gandhi' },
  { text: 'Si no te gusta algo, cámbialo. Si no puedes cambiarlo, cambia tu actitud', author: 'Maya Angelou' }
];

const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
const phraseText = document.createElement('p');
phraseText.innerHTML = randomPhrase.text;
phraseContainer.appendChild(phraseText);

const phraseAuthor = document.createElement('p');
phraseAuthor.innerHTML = `-${randomPhrase.author}`;
phraseContainer.appendChild(phraseAuthor);

// Obtener un gif aleatorio de Pexels
const url = 'https://api.pexels.com/videos/search?query=abstract&per_page=80';
fetch(url, { headers: { Authorization: apiKey } })
  .then(response => response.json())
  .then(data => {
    const randomGif = data.videos[Math.floor(Math.random() * data.videos.length)];
    gifContainer.style.backgroundImage = `url(${randomGif.image})`;
    gifContainer.style.backgroundSize = 'cover';
    gifContainer.style.backgroundPosition = 'center';
  })
  .catch(error => console.log(error));
