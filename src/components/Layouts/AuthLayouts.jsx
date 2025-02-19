import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, type }) => {
    return (<>
        <div className='bg-slate-200 h-screen flex justify-center items-center'>
            <div className="w-full max-w-xs bg-slate-100 p-7 rounded">
                <h1 className="text-3xl text-blue-600 font-bold mb-8">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details
                </p>
                {children}
                <Navigation type={type} />
            </div>
        </div>
    </>)
}

const Navigation = ({ type }) => {
    if (type === "login") {
        return <p className='mt-5 text-slate-400 text-[0.9rem]'>
            Dont have account ? <Link to="/register" className='font-bold text-blue-500 ms-1'>register</Link>
        </p>
    } else {
        return <p className='mt-5 text-slate-400 text-[0.9rem]'>
            Already have account ? <Link to="/login" className='font-bold text-blue-500 ms-1'>login</Link>
        </p>
    }
}

export default AuthLayout