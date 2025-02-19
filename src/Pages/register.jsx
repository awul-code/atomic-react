
import AuthLayout from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';
import { useLogin } from '../Hooks/useLogin';
import { useLocation, Navigate } from 'react-router-dom';

const RegisterPage = () => {
    const username = useLogin()
    const location = useLocation()

    if (username) {
        return (
            <Navigate to={location.state?.from || "/products"} />
        )
    }

    return (<>
        <AuthLayout title="Register" type="register">
            <FormRegister />
        </AuthLayout>
    </>)
}
export default RegisterPage