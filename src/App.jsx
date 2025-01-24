
import Button from './components/Elements/Button/Index';
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
          <form action="">
            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-700 mb-2" >Email</label>
              <input type="text" className="text-sm border rouded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" placeholder="example@mail.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-slate-700 mb-2" >Password</label>
              <input type="password" className="text-sm border rouded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" placeholder="********" />
            </div>

            <Button type="submit" className='w-full bg-blue-700'>SUBMIT</Button>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
