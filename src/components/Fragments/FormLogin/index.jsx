import InputForm from '../../Elements/Input/Index';
import Button from '../../Elements/Button/Index';
import { useEffect, useRef, useState } from 'react';
import { login } from '../../../services/auth.service';




const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res)
                window.location.href = "/products"
            } else {
                setLoginFailed(res.response.data)
            }
        })
    }

    const usernameRef = useRef(null)

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    return (
        <>
            <form onSubmit={handleLogin}>
                <InputForm
                    label={"username"}
                    name={"username"}
                    placeholder={'username...'}
                    type={"text"}
                    ref={usernameRef}
                />

                <InputForm
                    label={"Password"}
                    name={"password"}
                    placeholder={'****'}
                    type={"password"}
                />

                <Button type="submit" className='w-full bg-blue-700'>Login</Button>
            </form>

            {loginFailed && <p className='text-sm text-red-500 mt-5'>{loginFailed}</p>}
        </>
    )
}
export default FormLogin