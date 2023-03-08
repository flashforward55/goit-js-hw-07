import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryItemsLightbox = galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
</div>`;
    })
    .join('');

gallery.innerHTML = galleryItemsLightbox;
// gallery.insertAdjacentHTML('afterbegin', galleryItemsLightbox);

console.log(gallery);
console.log(galleryItemsLightbox);
