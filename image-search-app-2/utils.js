import { decodeBlurHash } from 'https://unpkg.com/fast-blurhash@1.1.4/index.js';

export function setBlurHashBG(blurhash, wrapper, width = 64, height = 64) {
  const pixels = decodeBlurHash(blurhash, width, height);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  canvas.toBlob(blob => {
    wrapper.style.backgroundImage = `url(${URL.createObjectURL(blob)})`;
  });
}

export function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq;
}

export class Cache {
  constructor(storageId) {
    this.storageId = storageId;
    this.storage = JSON.parse(localStorage.getItem(storageId)) ?? {};
  }

  get(key) {
    return this.storage[key];
  }

  set(key, val) {
    this.storage[key] = val;
    localStorage.setItem(this.storageId, JSON.stringify(this.storage));
  }

  has(key) {
    return this.storage[key] != undefined;
  }
}
