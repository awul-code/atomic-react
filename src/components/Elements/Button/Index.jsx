const Button = ({ children, type, variant = "bg-slate-900" }) => {
    return <>
        < button type={type} className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}> {children}</button>
    </>
}

export default Button