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

gallery.addEventListener('click', e => {
    e.preventDefault();

    const isImageEl = e.target.classList.contains('gallery__image');
    if (!isImageEl) return;

    function createModalWindow(e) {
        // console.log(e.target.dataset.source);
        return basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);
    }
    createModalWindow(e).show();
    addEventListener('keydown', closeModalWindow);

    function closeModalWindow(e) {
        if (e.code !== 'Escape') return;
        createModalWindow(e).close();
        removeEventListener('keydown', closeModalWindow);
    }
});

/* console.log(gallery);
console.log(galleryItemsLightbox); */
