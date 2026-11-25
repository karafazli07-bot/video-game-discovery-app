import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        api_key: 'c7f3e1c7b4d4e9a8b6f5c3d2e1f0a9b8',
    },
})