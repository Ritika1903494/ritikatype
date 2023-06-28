
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";


function Main_container(){

    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default Main_container;