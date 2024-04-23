import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Nav/Nav';



export const Layout = () => {

    const navItems = [
        {
            name: "Home",
            link: "home",
        },
        {
            name: "About",
            link: "about",
        },
        {
            name: "Gallery",
            link: "gallery",
        },
        {
            name: "Gallery2",
            link: "gallery2",
        },
    ]

    return (
        <>
            <Navbar navItems={navItems} />

            <Outlet />
            <footer>

            </footer>

        </>
    )
}