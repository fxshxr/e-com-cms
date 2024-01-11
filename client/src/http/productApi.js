import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const deleteType = async (type) =>{
    const {data} = await $authHost.delete(`api/type${type}`)
    console.log('deleted ')
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (typeId, brandId, page, limit=5) => {
    const {data} = await $host.get('api/product', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}


export const addToBasket = async (productId) => {
    const {response} = await $authHost.post('api/basket', productId)
    return response
}
export const deleteFromBasket = async (id) => {
    const {response} = await $authHost.delete(`api/basket${id}`)
    return response
}



export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}

