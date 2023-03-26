const videoContainer = document.createElement("div");
videoContainer.style.position = "fixed";
videoContainer.style.top = "0";
videoContainer.style.left = "0";
videoContainer.style.width = "100%";
videoContainer.style.height = "100%";
videoContainer.style.zIndex = "-1";
document.body.appendChild(videoContainer);

const spinner = document.createElement("div");
spinner.className = "spinner";
spinner.style.position = "absolute";
spinner.style.top = "50%";
spinner.style.left = "50%";
spinner.style.transform = "translate(-50%, -50%)";
spinner.innerHTML = "Loading...";
videoContainer.appendChild(spinner);

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    const quote = data[Math.floor(Math.random() * data.length)];
    const keyword = quote.text
      .replace(/[^\w\s]/gi, "")
      .split(" ")
      .sort((a, b) => b.length - a.length)[0];

    fetch(
      `https://api.pexels.com/videos/search?query=${keyword}&per_page=1&page=1`,
      { headers: { Authorization: "ddjm8OIXvFDtgsNCCPWeH38zaZdgMymJGqe9rjrXfYfGKrKboUSiok62" } }
    )
      .then((response) => response.json())
      .then((data) => {
        const video = document.createElement("video");
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.setAttribute("autoplay", "");
        video.setAttribute("loop", "");
        video.setAttribute("muted", "");
        videoContainer.appendChild(video);

        const source = document.createElement("source");
        source.setAttribute("src", data.videos[0].video_files[0].link);
        source.setAttribute("type", "video/mp4");
        video.appendChild(source);

        spinner.remove();

        const quoteContainer = document.createElement("div");
        quoteContainer.style.position = "absolute";
        quoteContainer.style.top = "50%";
        quoteContainer.style.left = "50%";
        quoteContainer.style.transform = "translate(-50%, -50%)";
        quoteContainer.style.textAlign = "center";
        quoteContainer.style.color = "#fff";
        quoteContainer.style.fontFamily = "sans-serif";
        quoteContainer.style.fontSize = "3em";
        quoteContainer.style.lineHeight = "1.2em";
        quoteContainer.innerHTML = `${quote.text}<br>- ${quote.author}`;
        videoContainer.appendChild(quoteContainer);
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));
