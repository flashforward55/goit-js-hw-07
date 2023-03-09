import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryItemsLightbox = galleryItems
    .map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join('');

gallery.innerHTML = galleryItemsLightbox;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
