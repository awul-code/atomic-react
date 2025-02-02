const Button = ({ children, type, className = "bg-slate-900", onClick }) => {
    return <>
        < button
            type={type}
            className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
            onClick={onClick}>
            {children}
        </button>
    </>
}

export default Button