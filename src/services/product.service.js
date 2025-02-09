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


export const searchProducts = (query, callback) => {
    axios.get(`https://fakestoreapi.com/products?search=${query}`).then((res) => {
        const filteredProducts = res.data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        callback(filteredProducts);
    }).catch((err) => {
        console.log(err)
    })
}