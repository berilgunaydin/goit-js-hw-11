import { fetchImages } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="input"]');

form.addEventListener('submit', e => {
  e.preventDefault();
  const enteredValue = input.value.trim();
  clearGallery();
  showLoader();
  if (!enteredValue) {
    hideLoader();
    return iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
  }
  fetchImages(enteredValue)
    .then(resolve => {
      if (resolve.data.hits.length <= 0) {
        hideLoader();
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        form.reset();
        return;
      }
      createGallery(resolve.data.hits);
      hideLoader();
      form.reset();
    })
    .catch(err => {
      hideLoader(); 
      iziToast.error({
        title: 'Error',
        message: err.message,
        position: 'topRight',
      });
    });
});