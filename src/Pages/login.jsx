
import AuthLayout from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin/index';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (<>
        <AuthLayout title="Login">
            <FormLogin />
            <p className='mt-5 text-slate-400 text-[0.9rem]'>
                Dont have account ?
                <Link to="/register" className='font-bold text-blue-500 ms-1'>Register</Link>
            </p>
        </AuthLayout>
    </>)
}
export default LoginPage