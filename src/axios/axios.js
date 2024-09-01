import axios from "axios"

const axiosClient = axios.create({
    baseURL : 'https://gigabit.co.ke/backend/',
})

export default axiosClient;