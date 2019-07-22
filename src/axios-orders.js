import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerappdemo.firebaseio.com/'
});

export default instance;