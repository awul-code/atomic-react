import Button from "../Elements/Button/Index"
import { useLogin } from '../../Hooks/useLogin';
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { useContext } from "react";
const Navbar = () => {
    const username = useLogin()
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }
    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <>
            <nav className={["flex items-center justify-between p-5", isDarkMode ? "bg-slate-900" : "bg-slate-200", isDarkMode ? "text-slate-200" : "text-slate-900"].join(" ")}>
                <h1 className='text-3xl font-bold'>LOGO</h1>
                <ul className="flex items-center justify-center hover:text-sky-400 font-light">
                    <li><Link to={'/products'}>Products</Link></li>
                </ul>
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

                    <Button
                        className="bg-blue-400 flex items-center justify-center "
                        onClick={handleDarkMode}
                    >
                        <p className={`${isDarkMode ? "text-slate-900" : "text-slate-200"} text-xl`}> {isDarkMode ? "🌞" : "🌚"}</p>
                    </Button>
                </div>
            </nav >
        </>
    )
}

export default Navbar