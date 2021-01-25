import CONFIG from './config';

const API_ENDPOINT = {
    HOME: `${CONFIG.BASE_URL}list`,
    REVIEW: `${CONFIG.BASE_URL}review`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
    SEARCH: (params) => `${CONFIG.BASE_URL}/search?q=${params}`,
};

export default API_ENDPOINT;
