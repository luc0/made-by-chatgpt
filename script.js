const QUOTES_API_URL = 'https://type.fit/api/quotes';
const PEXELS_API_KEY = 'ddjm8OIXvFDtgsNCCPWeH38zaZdgMymJGqe9rjrXfYfGKrKboUSiok62';
const VIDEO_WRAPPER_CLASS = 'video-wrapper';
const QUOTE_WRAPPER_CLASS = 'quote-wrapper';
const SPINNER_CLASS = 'spinner';

let videoPlayer;
let quoteData;

async function fetchQuotes() {
  const response = await fetch(QUOTES_API_URL);
  const data = await response.json();
  quoteData = data[Math.floor(Math.random() * data.length)];
  renderQuote();
  renderVideo();
}

async function fetchVideo(word) {
  const url = `https://api.pexels.com/videos/search?query=${word}&per_page=10`;
  const response = await fetch(url, {
    headers: {
      'Authorization': PEXELS_API_KEY
    }
  });
  const data = await response.json();
  if (data.videos.length > 0) {
    const video = data.videos[Math.floor(Math.random() * data.videos.length)];
    videoPlayer.src = video.video_files[0].link;
  } else {
    renderVideo();
  }
}

function renderQuote() {
  const quoteWrapper = document.createElement('div');
  quoteWrapper.classList.add(QUOTE_WRAPPER_CLASS);

  const quote = document.createElement('h1');
  quote.innerText = quoteData.text;
  quoteWrapper.appendChild(quote);

  const author = document.createElement('h2');
  author.innerText = quoteData.author;
  quoteWrapper.appendChild(author);

  document.body.appendChild(quoteWrapper);
}

function renderVideo() {
  const videoWrapper = document.createElement('div');
  videoWrapper.classList.add(VIDEO_WRAPPER_CLASS);

  const spinner = document.createElement('div');
  spinner.classList.add(SPINNER_CLASS);
  videoWrapper.appendChild(spinner);

  const video = document.createElement('video');
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  videoPlayer = video;
  videoWrapper.appendChild(video);

  document.body.appendChild(videoWrapper);

  const word = getLongestWord(quoteData.text);
  fetchVideo(word);
}

function getLongestWord(text) {
  const words = text.replace(/[^\w\s]/gi, '').split(' ');
  const longestWord = words.reduce((a, b) => a.length >= b.length ? a : b, '');
  return longestWord;
}

fetchQuotes();

setTimeout(() => {
  if (!videoPlayer.src) {
    const word = getLongestWord(quoteData.text);
    fetchVideo(word);
  }
}, 2000);
