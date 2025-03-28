const galleryItems = [
  {
    preview: 'https://placehold.co/300x200',
    original: 'https://placehold.co/1200x800',
    description: 'Örnek Görsel 1',
  },
  {
    preview: 'https://placehold.co/300x200?text=2',
    original: 'https://placehold.co/1200x800?text=2',
    description: 'Örnek Görsel 2',
  },
  {
    preview: 'https://placehold.co/300x200?text=3',
    original: 'https://placehold.co/1200x800?text=3',
    description: 'Örnek Görsel 3',
  },
];


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');

galleryContainer.innerHTML = galleryMarkup;

// 🔥 SimpleLightbox'ı başlat
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
