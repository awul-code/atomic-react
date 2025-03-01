import axios from "axios"

export const getProducts = async (callback) => {
    try {
        const respose = await axios.get("https://fakestoreapi.com/products")
        callback(respose.data)
    } catch (error) {
        callback(null, error)
    }
}

export const getDetailProducts = async (id, callback) => {

    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        callback(response.data)
    } catch (error) {
        callback(null, error)
    }
}


export const searchProducts = async (query, callback) => {

    if (typeof query !== 'string' || query.trim() === "") {
        callback([], new Error("Please enter a valid query"))
        return
    }
    try {
        const response = await axios.get(`https://fakestoreapi.com/products?search=${query}`)
        const searchResuts = response.data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        )
        callback(searchResuts, null)
    } catch (error) {
        callback([], error)
    }
}