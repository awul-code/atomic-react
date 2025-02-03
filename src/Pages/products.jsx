import Button from '../components/Elements/Button/Index';
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
    const email = localStorage.getItem("email")

    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
        console.log("oke");
    }

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

            <div className='flex flex-wrap flex-1 basis-9/12 justify-around gap-y5'>
                {
                    products.map((product) => {
                        return (
                            <CardProduct key={product.id} id={product.id} >
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body name={product.name}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer price={(product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} />
                            </CardProduct>
                        )
                    })
                }
            </div >

            <div className=' flex-1 w-fulll basis-3/12  p-4 bg-slate-100 rounded shadow'>
                <h1 className='text-5xl font-bold mb-5 border-b border-slate-400 pb-4'>🛒 Cart </h1>

                <div className='w-full '>
                    <h1>Helo</h1>
                </div>

            </div>
        </div >


    </>
}

export default ProductPage