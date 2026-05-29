import axios from "axios";
import { BE_CONFIG } from "./app.config";


const API = axios.create({
    baseURL:BE_CONFIG.API_URL,
    withCredentials: true
})

API.interceptors.request.use(
    (config)=> config,
    (error)=> Promise.reject(error)
)

API.interceptors.response.use(
    response => response.data,
    async error =>{
        const originalRequest = error.config;
        if(error.response?.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            try {
                await axios.post(`/auth/refresh-token`,{headers:{'x-email':'manhtt09@gmail.com'}})
                return API(originalRequest);
            } catch (error) {
                window.location.href = '/login';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default API;