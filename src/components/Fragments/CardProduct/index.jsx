import { Link } from "react-router-dom"
import Button from "../../Elements/Button/Index"


const CardProduct = ({ children }) => {
    return (
        <>
            <div className="mx-2  w-full  lg:w-xs border border-gray-700 rounded-lg shadow bg-gray-800 flex flex-col justify-between">
                {children}
            </div>
        </>
    )
}

const Header = ({ image, id }) => {
    return (
        <Link to={`/products/${id}`}>
            <img
                src={image}
                alt=""
                className="p-8 rounded-t-lg w-full  object-fit h-80 w-ful"
                id={id}
            />
        </Link>
    )
}

const Body = ({ name, children }) => {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white mb-4">
                    {name.substring(0, 30)}....
                </h5>
                <p className="text-m text-white">
                    {children.substring(0, 100)}....
                </p>
            </a>
        </div>
    )
}

const Footer = ({ price, handleAddToCart, id }) => {
    return (
        <div className="flex items-center justify-between px-5 pb-5 ">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>Add to chart</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer
export default CardProduct