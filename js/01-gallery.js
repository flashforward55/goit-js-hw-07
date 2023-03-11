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

gallery.addEventListener('click', e => {
    e.preventDefault();

    const isImageEl = e.target.classList.contains('gallery__image');
    if (!isImageEl) return;
    createModalWindow(e);
});
function createModalWindow(e) {
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
        onShow: () => {
            addEventListener('keydown', e => {
                if (e.code !== 'Escape') return;
                instance.close();
            });
        },
        onClose: () => {
            removeEventListener('keydown', e => {
                if (e.code !== 'Escape') return;
                instance.close();
            });
        },
    });
    instance.show();
}
