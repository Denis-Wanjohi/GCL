import axios from "axios"

const axiosClient = axios.create({
    baseURL : 'https://a9b7-102-219-209-193.ngrok-free.app',
    // baseURL : 'http://localhost:5500',
})

export default axiosClient;