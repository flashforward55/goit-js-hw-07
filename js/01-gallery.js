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
    createModalWindow(e);
});
let instance;
function createModalWindow(e) {
    instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
        onShow: () => {
            addEventListener('keydown', onEscapePress);
        },

        onClose: () => {
            removeEventListener('keydown', onEscapePress);
        },
    });
    instance.show();
}

function onEscapePress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
}
