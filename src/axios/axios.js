import axios from "axios"

const axiosClient = axios.create({
    baseURL : 'https://2cf1-102-219-209-193.ngrok-free.app',
    // baseURL : 'http://localhost:5500',
})

export default axiosClient;