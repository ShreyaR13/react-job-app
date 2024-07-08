// In the MainLayout, whatever route you are on, that content/page is going to come from Outlet
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default MainLayout