import { axiosCliente } from "../config/axios";

export const retrieveItemDB = async () => (
    await axiosCliente.get('/item')
)

export const addItemDB = async (item) => (
    await axiosCliente.post('/item', item)
)

export const deleteItemDB = async (id) => (
    await axiosCliente.delete(`/item/${id}`)
)

export const editItemDB = async (item) => (
    await axiosCliente.put(`/item/${item.id}`, item)
)
