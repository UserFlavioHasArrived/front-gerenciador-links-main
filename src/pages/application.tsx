import { Outlet } from "react-router-dom";

function ApplicationLayout() {
    return (
        <>
        
        <div>
            <Outlet />
        </div>
        </>
    )
}

export default ApplicationLayout