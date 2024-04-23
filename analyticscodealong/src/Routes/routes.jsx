import { createHashRouter } from "react-router-dom";
import { Layout } from "../layout/layout"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Gallery } from "../pages/Gallery"

export const routes = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        Children: [
            {
                path: "Home",
                element: <Home />
            },
            {
                path: "About",
                element: <About />
            },
            {
                path: "Gallery",
                element: <Gallery />
            },
        ],
    },
]);