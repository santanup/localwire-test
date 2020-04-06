import Axios from 'axios';

export const getAllPostByLanguage = (lang, page = 1) => Axios
    .get(`https://localwire.app/api/getmixedlist.php/?tags=0&categories=${lang === '/en' ? 5 : 4}&page=${page}&per_page=15`)
    .then(response => response.data);
