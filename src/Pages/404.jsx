import { useRouteError } from "react-router-dom"
const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div className="min-h-screen flex place-items-center flex-col justify-center">
            <h1 className="text-7xl font-bold mb-10 text-red-500">Oopss..</h1>
            <p className="text-slate-800 text-2xl mb-3">Sorry, un expected error has occured</p>
            <p className="text-xl text-slate-700"><span className="text-red-500 font-bold">404</span> - {error.statusText || error.message}</p>
        </div>
    )

}

export default ErrorPage