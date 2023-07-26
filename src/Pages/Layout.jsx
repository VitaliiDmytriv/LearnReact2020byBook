import { Outlet } from "react-router-dom";
import Navbar from "../Components/UI/navbar/Navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;
