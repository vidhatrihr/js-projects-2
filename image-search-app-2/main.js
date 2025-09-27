const accessKey = 'EJkN_ZCtAARx7ENuEbRJ1TaGUED_YcsMCStbCStMTX0';

async function getPhotos() {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=parrot`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });

  const data = await response.json();
  console.log(data);
}

getPhotos();
