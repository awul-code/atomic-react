
const AuthLayout = ({ children, title }) => {
    return (<>
        <div className='bg-slate-200 h-screen flex justify-center items-center'>
            <div className="w-full max-w-xs bg-slate-100 p-7 rounded">
                <h1 className="text-3xl text-blue-600 font-bold mb-8">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details
                </p>
                {children}
            </div>
        </div>
    </>)
}
export default AuthLayout