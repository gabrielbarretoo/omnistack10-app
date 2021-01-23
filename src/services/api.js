import Api from 'axios';

const api = Api.create({
    baseURL: 'http://192.168.0.103:3333',
});

export default api;