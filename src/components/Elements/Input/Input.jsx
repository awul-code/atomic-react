import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
    const { type, placeholder, name } = props;
    return (
        <input
            type={type}
            className="text-sm border rouded w-full py-2 px-3 text-slate-700 placeholder: opacity-50 focus:outline-blue-500 focus:border-blue-500 rounded-md"
            placeholder={placeholder}
            name={name}
            id={name}
            ref={ref}
        />
    )
})

export default Input