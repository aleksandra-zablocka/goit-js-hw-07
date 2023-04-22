import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

createGalleryItems();
function createGalleryItems() {
  const items = [];
  for (let i = 0; i < galleryItems.length; i++) {
    const item = document.createElement("button");
    item.type = "button";
    item.style.backgroundImage = "";
    item.classList.add("item");
    items.push(item);
  }
  gallery.append(...items);
}

// const imageMarkup = createMarkup(galleryItems);
// function createMarkup() {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//         <li class="gallery__item">
//         <a class="gallery__link" href=${original}">
//         <img class="gallery__image" src="${preview} data-source=${original} alt="${description}"/></a>
//         </li>
//         `;
//     })
//     .join("");
// }
// console.log(imageMarkup);
console.log(galleryItems);
