import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

createGalleryItems();

function createGalleryItems() {
  for (const galleryItem of galleryItems) {
    const galleryLi = document.createElement("li");
    galleryLi.classList.add("gallery__item");
    gallery.append(galleryLi);

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = galleryItem.original;
    galleryLi.append(galleryLink);

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = galleryItem.preview;
    galleryImage.alt = galleryItem.description;
    galleryImage.dataset.source = galleryItem.original;
    galleryLink.append(galleryImage);
  }
}

const openImage = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImage = event.target.dataset.source;
  const modal = basicLightbox.create(`
<div class="modal">
<img src="${selectedImage}" width="800" height="600">
</div>
`);
  modal.show();

  const keyClose = (event) => {
    if (event.key === "Escape" && modal.visible) {
      modal.close();
    }
  };
  document.addEventListener("keydown", keyClose);
};

gallery.addEventListener("click", openImage);
console.log(galleryItems);
