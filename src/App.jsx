
import Button from './components/Elements/Button/Index';
import InputForm from './components/Elements/Input/Index';
function App() {

  return (
    <>
      <div className='bg-slate-200 h-screen flex justify-center items-center'>
        <div className="w-full max-w-xs bg-slate-100 p-7 rounded">
          <h1 className="text-3xl font-bold mb-8">Login</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, please enter your details
          </p>
          {/* FORM */}
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

            <Button type="submit" className='w-full bg-blue-700'>SUBMIT</Button>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
