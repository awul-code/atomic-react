import { useEffect, useState } from 'react';
import Button from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct/index';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../Hooks/useLogin';
import SearchInputProduct from '../components/Elements/SearchInput';
import useDebounce from '../Hooks/useDebounce';
import { getProducts, searchProducts } from '../services/product.service';


const ProductPage = () => {
    const debounce = useDebounce()
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const username = useLogin()
    const DELAY = 500

    const handleLogout = () => {
        localStorage.removeItem("token")
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

    const totalPriceRef = useRef(null)


    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || [])
        setTotalPrice(JSON.parse(localStorage.getItem('totalPrice')) || 0)
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


    const handleSearch = () => {
        if (query !== '') {
            searchProducts(query, (data) => {
                setResults(data);
            });
        } else {
            getProducts((data) => {
                setResults(data)
            })
        }
    };

    const debouncedHandleSearch = debounce(handleSearch, DELAY);



    useEffect(() => {
        debouncedHandleSearch();
    }, [query]);


    return <>

        <nav className='flex justify-between p-[10px] shadow'>
            <h1 className='text-3xl font-bold'>LOGO</h1>
            <div className='flex justify-center items-center gap-4'>
                {
                    username ?
                        <>
                            <Link to={'/profile'}>
                                <p className='text-xl font-bold'>{username} 😁</p>
                            </Link>
                            <Button onClick={handleLogout} type="button" className='bg-red-600 text-white py-2 rounded h-5 cursor-pointer'>Logout</Button>
                        </>
                        :
                        <Link to={'/login'}><Button type="button" className='bg-blue-600 text-white py-2 rounded h-5 cursor-pointer'>Login</Button></Link>
                }
            </div>
        </nav >


        <div className='w-[90%] m-auto'>


            <div className="w-[40%] mt-8 m-auto">
                <SearchInputProduct onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="flex py-5 mt-8  w-full  col-end-9 ">

                <div className='flex flex-wrap flex-1 basis-9/12 gap-y5 justify-around gap-y-10'>
                    {results.length > 0 &&
                        results.map((product) => {
                            return (
                                <CardProduct key={product.id}>
                                    <CardProduct.Header image={product.image} id={product.id} />
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
        </div>

    </>
}

export default ProductPage