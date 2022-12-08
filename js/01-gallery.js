import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend",imagesMarkup);

function createItemsMarkup(items){
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original.value}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

const onContainerClick = (evt) => {
    evt.preventDefault();
  
    if (evt.target.classList.contains("gallery")) 
     return;
      const source = evt.target.dataset.source;
      
    const instance = basicLightbox.create(`
      <img src="${source}"width="800" height="600">`);
  
    instance.show();
  };
  
galleryContainerRef.addEventListener("click", onContainerClick);