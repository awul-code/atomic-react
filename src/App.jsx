
import Button from './components/Elements/Button/Index';
function App() {

  return (
    <>
      <div className='bg-slate-800 flex gap-5 justify-center h-screen items-center flex-wrap flex-col' >
        <h1 className="text-5xl text-white">Hello world this has using tailwind CSS 👍</h1>
        <Button type="submit">Submit</Button>
        <Button type="submit" variant='bg-blue-500'>Submit</Button>
        <Button type="submit" variant='bg-pink-500'>Submit</Button>
      </div>
    </>
  )
}

export default App
