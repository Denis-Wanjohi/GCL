import {createStore} from 'vuex'
import axiosClient from "@/axios/axios"
const store = createStore({
    state:{},
    getters:{},
    actions:{
        async contactForm({commit},data){
            console.log(data)
            const res = await axiosClient.post('/contact',data)
            console.log(res)
            return res;
        },
        async internet({commit},data){
            const res = await axiosClient.post('/internet',data)
            console.log(res)
            return res;
        }
    },
    mutations:{},
    modules:{}
})

export default store;