import { Outlet } from "react-router-dom";

function AuthenticationLayout() {
    return (
        <div className="flex flex-col justify-center intens-center">
        <h1>Pagina De Login</h1>
        <div>
            <p></p>
            <Outlet/>
        </div>
        </div>
    )
}

export default AuthenticationLayout