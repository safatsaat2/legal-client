import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import DrawerAppBar from "../Pages/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <DrawerAppBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;