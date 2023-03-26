
// Obtener la cita aleatoria
fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(data => {
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    // Obtener la palabra más larga de la cita
    const longestWord = randomQuote.text
      .replace(/[^\w\s]|_/g, "") // Eliminar signos de puntuación
      .split(" ")
      .reduce((acc, cur) => acc.length >= cur.length ? acc : cur, "");
    // Obtener un video relacionado con la palabra más larga
    const videoUrl = `https://api.pexels.com/videos/search?query=${longestWord}&per_page=1`;
    const headers = new Headers({
      "Authorization": "Bearer ddjm8OIXvFDtgsNCCPWeH38zaZdgMymJGqe9rjrXfYfGKrKboUSiok62"
    });
    fetch(videoUrl, { headers })
      .then(response => response.json())
      .then(data => {
        const video = document.createElement("video");
        video.src = data.videos[0].video_files[0].link;
        video.loop = true;
        video.autoplay = true;
        video.muted = true;
        video.style.position = "fixed";
        video.style.top = "0";
        video.style.left = "0";
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        const spinner = document.createElement("div");
        spinner.className = "spinner";
        spinner.style.position = "absolute";
        spinner.style.top = "50%";
        spinner.style.left = "50%";
        spinner.style.transform = "translate(-50%, -50%)";
        spinner.innerHTML = `
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        `;
        document.body.appendChild(spinner);
        video.addEventListener("loadeddata", () => {
          spinner.remove();
          document.body.appendChild(video);
        });
      })
      .catch(() => {
        // Si no se encuentra un video relacionado con la palabra más larga, intentar con otra palabra
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
    // Mostrar la cita
    const quoteContainer = document.createElement("div");
    quoteContainer.style.position = "fixed";
    quoteContainer.style.top = "50%";
    quoteContainer.style.left = "50%";
    quoteContainer.style.transform = "translate(-50%, -50%)";
    quoteContainer.style.textAlign = "center";
    quoteContainer.style.zIndex = "1";
    quoteContainer.style.color = "#fff";
    quoteContainer.style.textShadow = "2px 2px #333";
    quoteContainer.innerHTML = `
      <p style="font-size: 3rem; font-weight: bold; line-height: 1.2;">${randomQuote.text}</p>
      <p style="font-size: 2rem; font-style: italic; margin-top: 1rem;">- ${randomQuote.author}</p>
    `;
    document.body.appendChild(quoteContainer);
  })
  .catch(error => console.error(error));
