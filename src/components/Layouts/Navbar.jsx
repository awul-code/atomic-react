import Button from "../Elements/Button/Index"
import { useLogin } from '../../Hooks/useLogin';
import { Link } from "react-router-dom";

const Navbar = () => {
    const username = useLogin()
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }
    return (
        <>
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
        </>
    )
}

export default Navbar