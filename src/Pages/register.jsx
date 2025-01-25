
import AuthLayout from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (<>
        <AuthLayout title="Register">
            <FormRegister />
            <p className='mt-5 text-slate-400 text-[0.9rem]'>
                Dont have account ?
                <Link to="/login" className='font-bold text-blue-500 ms-1'>Login</Link>
            </p>
        </AuthLayout>
    </>)
}
export default RegisterPage