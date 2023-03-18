import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer'
import Footer2 from './Components/Footer2/Footer'

function Root(){
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Root;