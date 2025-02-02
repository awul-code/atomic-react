import InputForm from '../../Elements/Input/Index';
import Button from '../../Elements/Button/Index';

const FormRegister = () => {
    return (
        <>
            <form>
                <InputForm
                    label={"Full Name"}
                    name={"fullname"}
                    placeholder={'Inser yout name here...'}
                    type={"text"}
                />
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

                <InputForm
                    label={"Confirm Password"}
                    name={"confirmPassword"}
                    placeholder={'****'}
                    type={"password"}
                />


                <Button type="submit" className='w-full bg-blue-700'>Register</Button>
            </form>
        </>
    )
}
export default FormRegister