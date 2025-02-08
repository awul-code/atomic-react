import { useEffect, useState } from 'react';
import Button from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct/index';
import { useRef } from 'react';
import { getProducts } from '../services/product.service';
import { Link } from 'react-router-dom';
import { getUsername } from '../services/auth.service';


const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([])
    const [username, setUsername] = useState()

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
        localStorage.removeItem("token")

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


    // Calculate the total price of all items in the cart
    // We use the reduce method to iterate over the cart array
    // and sum up the price of each item
    // The initial value of the total is 0
    // The function passed to reduce takes two arguments: the current total and the current item in the array
    // We use the find method to get the product object from the products array
    // that matches the id of the current item in the cart
    // We then multiply the quantity of the item by its price
    // and add that to the total
    // Finally, we use the toLocaleString method to format the total as a currency
    // with the id-ID locale and IDR currency

    // .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    const totalPriceRef = useRef(null)


    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || [])
        setTotalPrice(JSON.parse(localStorage.getItem('totalPrice')) || 0)

        const token = localStorage.getItem("token")

        if (!token) {
            window.location.href = "/login"
        }
        setUsername(getUsername(token).user)
    }, [])

    useEffect(() => {
        if (products.length && cart.length > 0) {
            const totalPrice = cart.reduce((total, item) => {
                const product = products.find((product) => product.id === item.id)
                return total + (item.qty * product.price)
            }, 0)
            setTotalPrice(totalPrice)
            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
        }
    }, [cart])


    // This useEffect hook is used to dynamically show or hide the total price
    // of the items in the cart based on the length of the cart array.
    // 
    // The function passed to useEffect takes a dependency array as its second argument.
    // The dependency array is an array of values that the function depends on.
    // Whenever any value in the dependency array changes, the function is re-run.
    // In this case, the dependency array is [cart], so the function will be re-run
    // whenever the cart array changes.
    // 
    // The function itself simply checks if the length of the cart array is greater than 0.
    // If it is, the function sets the display property of the totalPriceRef.current element
    // to "block", which makes it visible. If the length is 0, the function sets the display
    // property to "none", which makes it invisible.

    useEffect(() => {
        if (cart.length > 0) {
            // If the cart is not empty, show the total price
            totalPriceRef.current.style.display = "table-footer-group"
            totalPriceRef.current.style.width = "100%"
        } else {
            // If the cart is empty, hide the total price
            totalPriceRef.current.style.display = "none"
        }
    }, [cart])


    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, [])

    return <>

        <nav className='flex justify-between p-[10px] shadow'>
            <h1 className='text-3xl font-bold'>LOGO</h1>
            <div className='flex justify-center items-center gap-4'>
                {
                    username ?
                        <>
                            <p className='text-xl font-bold'>{username} 😁</p>
                            <Button onClick={handleLogout} type="button" className='bg-red-600 text-white py-2 rounded h-5 cursor-pointer'>Logout</Button>
                        </>
                        :
                        <Link to={'/login'}><Button type="button" className='bg-blue-600 text-white py-2 rounded h-5 cursor-pointer'>Login</Button></Link>
                }
            </div>
        </nav >

        <div className="flex  py-5 mt-8 w-[90%]  col-end-9 m-auto">

            <div className='flex flex-wrap flex-1 basis-9/12 gap-y5 justify-around gap-y-10'>
                {products.length > 0 &&
                    products.map((product) => {
                        return (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body name={product.title}>
                                    {product.description}
                                </CardProduct.Body>

                                <CardProduct.Footer
                                    price={(product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
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
                                {products.length > 0 &&
                                    cart.map((item) => {
                                        const product = products.find((product) => product.id === item.id)
                                        return (
                                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100" >
                                                <td className="py-3 px-6 text-left" > {product.title.substring(0, 10)}...</td>
                                                <td className="py-3 px-6 text-left">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td >
                                                <td className="py-3 px-6 text-left" > {item.qty}</td >
                                                <td className="py-3 px-6 text-left" > {(item.qty * product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td >
                                            </tr >
                                        )
                                    })
                                }
                            </tbody >
                            <tfoot ref={totalPriceRef}>
                                <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal '>
                                    <th colSpan={3} className="py-3 px-6 text-left">Total Price</th>
                                    <th className="py-3 px-6 text-left font-bold text-green-500">
                                        {totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
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