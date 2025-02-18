import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Cart = () => {
    const cart = useSelector((state) => state.cart.data)
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const cartTotal = cart.reduce((total, item) => {
            return total + item.qty
        }, 0)
        setCartCount(cartTotal)
    }, [cart])

    return (
        <div className='relative h-15'>
            <h1 className='absolute top-0 right-2 text-4xl'>🛒</h1>
            <span className='bg-orange-500 absolute -top-2 right-0 text-white w-6 h-6 flex items-center justify-center rounded-full'>
                {cartCount}
            </span>
        </div>
    )
}

export default Cart