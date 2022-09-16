import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-teppa.herokuapp.com'
})

export default api