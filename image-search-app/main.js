async function getPhotos() {
  const accesskey = 'EJkN_ZCtAARx7ENuEbRJ1TaGUED_YcsMCStbCStMTX0';
  const response = await fetch('https://api.unsplash.com/photos/random?count=1', {
    headers: {
      Authorization: `Client-ID ${accesskey}`,
    },
  });

  const data = await response.json();
  console.log(data);
}

getPhotos();
