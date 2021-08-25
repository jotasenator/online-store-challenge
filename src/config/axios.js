import axios from 'axios'

export const axiosCliente = axios.create({
    baseURL: 'http://localhost:3001/'

})

