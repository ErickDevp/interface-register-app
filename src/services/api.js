import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-register-users-two.vercel.app'
});

export default api;