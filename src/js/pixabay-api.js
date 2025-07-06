import axios from "axios";

const publicKey = '50406529-48aaa3d05a76e0acf14414e94';
const url = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const currentURL = `${url}?key=${publicKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`
    return axios.get(currentURL)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw new Error(error)
        })
}