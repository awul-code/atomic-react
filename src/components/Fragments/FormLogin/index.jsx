import InputForm from '../../Elements/Input/Index';
import Button from '../../Elements/Button/Index';

const FormLogin = () => {
    return (
        <>
            <form>
                <InputForm
                    label={"Email"}
                    name={"email"}
                    placeholder={'example@mail.com'}
                    type={"email"}
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