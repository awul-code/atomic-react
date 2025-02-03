import { useState } from 'react';
import Button from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct/index';

const products = [
    {
        id: "1",
        name: "New Ballance",
        price: 150000,
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
        price: 300000,
        image: "https://img.freepik.com/free-photo/close-up-futuristic-sneakers_23-2151005739.jpg?uid=R29316147&ga=GA1.1.556692015.1737943849&semt=ais_hybrid",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quia."
    },

]


const ProductPage = () => {
    const email = localStorage.getItem("email")

    const [cart, setCart] = useState([]);


    /**
     * This function is called when the user clicks the "Logout" button.
     * It will remove the email and password from local storage and then redirect the user to the login page.
     * The `console.log` statement is just for debugging purposes and can be removed in production.
     */
    const handleLogout = () => {
        /**
         * Remove the email and password from local storage.
         * This will prevent the user from being automatically logged in again.
         */
        localStorage.removeItem("email")
        localStorage.removeItem("password")

        /**
         * Redirect the user to the login page.
         * This will force the user to log in again if they want to access the protected route.
         */
        window.location.href = "/login"
    }

    /**
     * This function is called when the user clicks the "Add to Cart" button for a product.
     * It will add the product to the cart if it's not already there, or increment the quantity if it is.
     * The `cart` state is an array of objects, where each object has an `id` property and a `qty` property.
     * The `id` property is the unique identifier for the product, and the `qty` property is the quantity of the product in the cart.
     *
     * First, it checks if the item is already in the cart by using the `find` method.
     * If the item is found, it means the user has already added it to the cart, so we just increment the quantity.
     * We use the `map` method to create a new array with the updated quantity.
     * We use the spread operator to create a new object with the updated `qty` property.
     *
     * If the item is not found, it means the user has not added it to the cart yet, so we add it.
     * We use the spread operator to create a new array with the new item.
     * We create a new object with the `id` property set to the product's id and the `qty` property set to 1.
     */
    const handleAddToCart = (id) => {
        // Check if the item is already in the cart
        const existingItem = cart.find((item) => item.id === id);

        if (existingItem) {
            // Item is already in the cart, so just increment the quantity
            setCart(
                cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            );
        } else {
            // Item is not in the cart, so add it with a quantity of 1
            setCart([...cart, { id: id, qty: 1 }]);
        }
    };


    return <>

        <nav className='flex justify-between p-[10px] shadow'>
            <h1 className='text-3xl font-bold'>LOGO</h1>
            <div className='flex justify-center items-center gap-4'>
                {
                    email ?
                        <>
                            <p className='text-xl font-bold'>{email}</p>
                            <Button onClick={handleLogout} type="button" className='bg-red-600 text-white py-2 rounded h-5 cursor-pointer'>Logout</Button>
                        </>
                        :
                        window.location.href = "/login"
                }

            </div>
        </nav >

        <div className="flex  py-5 mt-8 w-[90%]  col-end-9 m-auto">

            <div className='flex flex-wrap flex-1 basis-9/12 gap-y5 justify-around gap-y-10'>
                {
                    products.map((product) => {
                        return (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body name={product.name}>
                                    {product.description}
                                </CardProduct.Body>

                                <CardProduct.Footer
                                    price={(product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                    id={product.id}
                                    handleAddToCart={handleAddToCart}
                                />
                            </CardProduct>
                        )
                    })
                }
            </div >

            <div className=' flex-1 w-fulll basis-3/12  p-4 bg-slate-100 rounded shadow h-1/2'>
                <div className='relative h-15'>
                    <h1 className='absolute top-0 right-2 text-4xl'>🛒</h1>
                    <span className='bg-orange-500 absolute -top-2 right-0 text-white w-6 h-6 flex items-center justify-center rounded-full'>
                        {
                            cart.reduce((total, item) => {
                                return total + item.qty
                            }, 0)
                        }
                    </span>
                </div>
                <div className='w-full '>
                    <ul>
                        <table className='min-w-full bg-white border border-gray-300'>
                            <thead>
                                <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                                    <th className="py-3 px-6 text-left">Product</th>
                                    <th className="py-3 px-6 text-left">Price</th>
                                    <th className="py-3 px-6 text-left">qty</th>
                                    <th className="py-3 px-6 text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {
                                    cart.map((item) => {
                                        const product = products.find((product) => product.id === item.id)
                                        return (
                                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100" >
                                                <td className="py-3 px-6 text-left" > {product.name}</td>
                                                <td className="py-3 px-6 text-left">{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td >
                                                <td className="py-3 px-6 text-left" > {item.qty}</td >
                                                <td className="py-3 px-6 text-left" > {(item.qty * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td >
                                            </tr >
                                        )
                                    })
                                }
                            </tbody >
                            <tfoot>
                                <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>

                                    <th colSpan={3} className="py-3 px-6 text-left">Total</th>

                                    <th className="py-3 px-6 text-left font-bold text-green-500">
                                        {
                                            cart.reduce((total, item) => {
                                                const product = products.find((product) => product.id === item.id)
                                                return total + (item.qty * product.price)
                                            }, 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
                                        }
                                    </th>
                                </tr>
                            </tfoot>
                        </table >
                    </ul >
                </div >

            </div >
        </div >


    </>
}

export default ProductPage