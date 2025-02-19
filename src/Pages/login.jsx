
import AuthLayout from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin/index';
import { useLogin } from '../Hooks/useLogin';
import { Navigate, useLocation } from 'react-router-dom';

const LoginPage = () => {

    const username = useLogin()
    const location = useLocation()

    if (username) {
        return (
            <Navigate to={location.state?.from || "/products"} />
        )
    }

    return (<>
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    </>)
}
export default LoginPage