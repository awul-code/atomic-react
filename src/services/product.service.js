import axios from "axios"

export const getProducts = (callback) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const getDetailProducts = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
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