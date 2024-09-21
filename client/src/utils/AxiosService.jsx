import axios from 'axios'

const AxiosService = axios.create({
    baseURL : `${import.meta.env.VITE_API_BASE_URL}`,
    
    headers : {
        "Content-Type" :"application/json",
        Authorization : localStorage.getItem('loginToken')
    }
})

AxiosService.interceptors.request.use((config) => {
    const token = localStorage.getItem('loginToken')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error) => {
    return Promise.reject(error)
})

export default AxiosService