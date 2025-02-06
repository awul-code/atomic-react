import InputForm from '../../Elements/Input/Index';
import Button from '../../Elements/Button/Index';
import { useEffect, useRef } from 'react';




const FormLogin = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        window.location.href = "/products";
    }

    const emailRef = useRef(null)

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    return (
        <>
            <form onSubmit={handleLogin}>
                <InputForm
                    label={"Email"}
                    name={"email"}
                    placeholder={'example@mail.com'}
                    type={"email"}
                    ref={emailRef}
                />

                <InputForm
                    label={"Password"}
                    name={"password"}
                    placeholder={'****'}
                    type={"password"}
                />

                <Button type="submit" className='w-full bg-blue-700'>Login</Button>
            </form>
        </>
    )
}
export default FormLogin