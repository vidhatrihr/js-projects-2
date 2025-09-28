import { Cache, getContrastYIQ, setBlurHashBG } from './utils.js';

const accessKey = 'EJkN_ZCtAARx7ENuEbRJ1TaGUED_YcsMCStbCStMTX0';
let cache = new Cache('searched-images');

async function getPhotos() {
  let query = document.querySelector('input').value;
  if (!query) return;

  let data;
  if (cache.has(query)) {
    data = cache.get(query);
  } else {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    data = await response.json();
    cache.set(query, data);
  }

  let container = document.querySelector('.image-container');
  container.innerHTML = '';

  data.results.forEach(img => {
    let textColor = getContrastYIQ(img.color) >= 128 ? 'dark-text' : 'light-text';

    const dummy = document.createElement('div');

    dummy.innerHTML = `
      <div class="image-result">
        <div class="image-wrapper">
          <img src="${img.urls.regular}" alt="${img.alt_description}" />
        </div>
        <p class="${textColor}" style="background-color: ${img.color};">${img.alt_description}</p>
      </div>
    `;
    setBlurHashBG(img.blur_hash, dummy.querySelector('.image-result'));
    document.querySelector('.image-container').append(dummy.firstElementChild);
  });
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  getPhotos();
});

getPhotos();
