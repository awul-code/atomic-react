
import AuthLayout from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin/index';

const LoginPage = () => {
    return (<>
        <AuthLayout title="Login">
            <FormLogin />
        </AuthLayout>
    </>)
}
export default LoginPage