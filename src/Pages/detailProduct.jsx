import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailProducts } from "../services/product.service"
import Button from "../components/Elements/Button/Index"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/slices/cartSlice"
import Navbar from '../components/Layouts/Navbar';

const DetailProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [rate, setRate] = useState(0)
    const [stock, setStock] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        getDetailProducts(id, (data) => {
            setProduct(data)
            setRate(data?.rating["rate"])
            setStock(data?.rating["count"])
        })
    }, [id])






    return (<>

        <Navbar />

        <nav className="breadcrumb w-[90%] bg-slate-100 mx-auto my-3">
            <ol>
                <li>Home</li>
            </ol>
        </nav>

        {Object.keys(product).length > 0 && (
            <div className="flex justify-center items-center">
                <article className=" rounded-lg shadow-sm transition hover:shadow-lg w-[80%] mt-10 flex">
                    <img
                        alt=""
                        src={product.image}
                        className="ratio-16-9 max-w-50 h-full object-fit object-center flex-1 p-2 box-border"
                    />

                    <div className="bg-white p-4 sm:p-6 flex-1">
                        <div className="flex flex-col mb-5">
                            <time className="block text-xs text-gray-500 flex-1 mb-5">{product.category}</time>
                            <h1 className="block text-xs text-gray-500">Rate</h1>
                            <div className="flex justify-center items-center gap-4 ">
                                <p className="text-xl">{rate}</p>
                                <div className="flex space-x-2 w-full object-fit">
                                    {[...Array(5)].map((_, index) => (
                                        <svg width={"30px"}
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-4 w-4  ${index < rate ? 'text-yellow-500' : 'text-gray-400'
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 5.88l-3.46 6.76L2 12.54l5.49 4.47L4.82 22l7.18-4.09L19.18 22l-2.67-4.99L22 12.54l-6.54-1.07L12 5.88z"
                                            />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-gray-900">{product.title}</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {product.description}
                        </p>
                        <p className="my-5 text-xs">Stock: {stock}</p>
                        <Button
                            className="bg-blue-600 text-xs"
                            onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
                            Add To Chart
                        </Button>
                    </div>


                </article >
            </div >
        )}

    </>)
}

export default DetailProductPage