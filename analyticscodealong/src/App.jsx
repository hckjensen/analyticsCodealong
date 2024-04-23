import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/routes.jsx'
import ReactGA from "react-ga4";
import './App.css'


function App() {

  ReactGA.initialize("G-C8DN6LV4LX")
  return <RouterProvider router={routes} />
}

export default App
