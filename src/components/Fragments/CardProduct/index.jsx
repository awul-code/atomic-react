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

const Header = ({ image }) => {
    return (
        <a href="#">
            <img
                src={image}
                alt=""
                className="p-8 rounded-t-lg aspect-square w-full object-center object-cover " />
        </a>
    )
}

const Body = ({ name, children }) => {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name}
                </h5>
                <p className="text-m text-white">
                    {children}
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