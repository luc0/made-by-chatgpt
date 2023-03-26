const API_KEY = "ddjm8OIXvFDtgsNCCPWeH38zaZdgMymJGqe9rjrXfYfGKrKboUSiok62";
const videoContainer = document.createElement("div");
const textContainer = document.createElement("div");
const spinner = document.createElement("div");
spinner.className = "spinner";

const getVideoUrl = async () => {
  try {
    const response = await fetch(
      `https://api.pexels.com/videos/search?query=nature&per_page=80`,
      { headers: { Authorization: API_KEY } }
    );
    const { videos } = await response.json();
    const video = videos[Math.floor(Math.random() * videos.length)];
    return video.video_files.find((file) => file.quality === "hd").link;
  } catch (err) {
    console.error(err);
  }
};

const getQuote = async () => {
  try {
    const response = await fetch(
      "https://type.fit/api/quotes"
    );
    const quotes = await response.json();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote;
  } catch (err) {
    console.error(err);
  }
};

const setVideoBackground = async () => {
  spinner.style.display = "block";
  const videoUrl = await getVideoUrl();
  videoContainer.innerHTML = `<video autoplay loop muted playsinline style="object-fit: cover; position: fixed; top: 0; left: 0; height: 100%; width: 100%; z-index: -1;">
  <source src="${videoUrl}" type="video/mp4">
  Your browser does not support the video tag.
</video>`;
  const quote = await getQuote();
  textContainer.innerHTML = `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; font-size: 5vw; font-weight: bold; line-height: 1.5; text-shadow: 2px 2px black;">
  ${quote.text}
  <br><br>
  <span style="font-size: 3vw; font-weight: normal;">${quote.author}</span>
</div>`;
  spinner.style.display = "none";
};

setVideoBackground();
document.body.appendChild(videoContainer);
document.body.appendChild(textContainer);
document.body.appendChild(spinner);
