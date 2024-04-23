import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/routes.jsx'
import ReactGA from "react-ga4";
import './App.css'


function App() {


  return <RouterProvider router={routes} />
}

export default App
