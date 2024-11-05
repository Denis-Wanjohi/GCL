import axios from "axios"

const axiosClient = axios.create({
    // baseURL : ' http://localhost:5500/',
    baseURL : 'https://gigabit.co.ke/app',
})

export default axiosClient;