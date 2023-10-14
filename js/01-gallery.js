import { galleryItems } from './gallery-items.js';
console.log(galleryItems);


const galleryList = document.querySelector('.gallery');
galleryList.addEventListener("click", handleClick);


function markup(e) {
  return e
    .map(({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
    `).join('');
}

function handleClick(evt) {
  console.log(evt)
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  
const instance = basicLightbox.create(`<div class="modal">
<img class="gallery_item" src="${evt.target.dataset.source}">
</div>`)
  
  instance.show();

  instance.element().addEventListener('click', () => {
  instance.close();
  });

};
