async function getPhotos() {
  const accessKey = 'EJkN_ZCtAARx7ENuEbRJ1TaGUED_YcsMCStbCStMTX0';
  const query = document.querySelector('input').value;
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });

  // const response = await fetch('data.json');
  document.querySelector('.image-container').innerHTML = '';

  const data = await response.json();
  data.results.forEach(element => {
    const caption = element.alt_description[0].toUpperCase() + element.alt_description.slice(1);
    const html = `
        <div class="image-result">
          <img src="${element.urls.regular}" alt="${caption}" />
          <p>${caption}</p>
        </div>
    `;
    document.querySelector('.image-container').innerHTML += html;
  });
}

document.querySelector('.search-container').addEventListener('submit', event => {
  event.preventDefault();
  getPhotos();
});
