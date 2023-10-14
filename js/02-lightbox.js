import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createMarkup(e) {
  return e
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}" />
        </a>
      </li>
    `)
    .join('');
}

const markup = createMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionDelay: 250,
  captionsData: 'alt'
});