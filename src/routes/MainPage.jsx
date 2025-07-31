import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const MainPage = () => {
    return (
        <div className="bg-[#1A191C]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;