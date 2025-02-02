import CardProduct from '../components/Fragments/CardProduct/index';

const products = [
    {
        id: "1",
        name: "New Ballance",
        price: 1500000,
        image: "./images/soes.png",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur similique blanditiis aliquid."
    },
    {
        id: "2",
        name: "Vans",
        price: 200000,
        image: "https://img.freepik.com/free-photo/shoes_1203-8153.jpg?t=st=1737955926~exp=1737959526~hmac=ff17b18c14b27205977bd1683b4ce570f1d14e09b1af734a9b8e195cd77dcf6f&w=740",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quia."
    },
    {
        id: "3",
        name: "Nike Joran",
        price: 3000000,
        image: "https://img.freepik.com/free-photo/close-up-futuristic-sneakers_23-2151005739.jpg?uid=R29316147&ga=GA1.1.556692015.1737943849&semt=ais_hybrid",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quia."
    },

]


const ProductPage = () => {
    return <>
        <h1 className='text-center text-8xl font-bold'>Shoes List</h1>
        <div className="flex justify-center py-5">

            {
                products.map((product) => {
                    return (
                        <CardProduct id={product.id} >
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={(product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} />
                        </CardProduct>
                    )
                })
            }
        </div>
    </>
}

export default ProductPage