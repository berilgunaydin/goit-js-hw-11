import axios from "axios";

const publicKey = '50406529-48aaa3d05a76e0acf14414e94';
const url = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await axios.get(`${url}`, {
      params: {
        key: publicKey,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 20,
      },
    });

    return response.data; // ✅ Sadece gerekli veri döndürülüyor

  } catch (error) {
    throw new Error(`Pixabay API hatası: ${error.message}`); // ✅ Hata detayları korunuyor
  }
}

