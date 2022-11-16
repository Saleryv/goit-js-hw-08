// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");



function createGalleryMarkup(pictures) {
    return pictures.map((picture) => `
        <li class="gallery__item">

          <a class="gallery__item" href="${picture.original}">
            <img
              class="gallery__image"
              src="${picture.preview}"
              alt="${picture.description}"
            />
          </a>
        </li>`
      )
      .join("");
}


galleryEl.innerHTML = createGalleryMarkup(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {  captionsData: "alt", captionDelay:250});


