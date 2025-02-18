import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

const TableCart = ({ products }) => {
    const cart = useSelector((state) => state.cart.data)
    const [totalPrice, setTotalPrice] = useState(0)

    const totalPriceRef = useRef(null)

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const totalPrice = cart.reduce((total, item) => {
                const product = products.find((product) => product.id === item.id)
                return total + (item.qty * product.price)
            }, 0)
            setTotalPrice(totalPrice)
            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
        }
    }, [cart, products])


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



    return (
        <>
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
                    <tr className='bg-slate-200 text-slate-600 uppercase text-sm leading-normal '>
                        <th colSpan={3} className="py-3 px-6 text-left">Total Price</th>
                        <th className="py-3 px-6 text-left font-bold text-green-500">
                            {totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </th>
                    </tr>
                </tfoot>
            </table >
        </>
    )
}

export default TableCart