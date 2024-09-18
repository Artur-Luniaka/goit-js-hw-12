import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const userForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = () => document.querySelector("span").classList.toggle("loader");

const warn = () => iziToast.show({
    message: 'Please fill a field',
    backgroundColor: 'red',
    color: 'white',
});

const mistake = () => iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    backgroundColor: 'red',
    color: 'white',
});

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

const handleImages = (event) => {
    event.preventDefault();
    const userQuery = event.currentTarget.elements.query.value.toLowerCase().trim();
    if (!userQuery) return warn();
        gallery.innerHTML = "";
        loader();
    fetchImages(userQuery)
        .then((json) => {
            if (!json.hits.length) return mistake();
                gallery.insertAdjacentHTML('beforeend', renderImages(json.hits).join(''));
                lightbox.refresh();
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {loader()});
    userForm.reset();
    };

userForm.addEventListener('submit', handleImages);
