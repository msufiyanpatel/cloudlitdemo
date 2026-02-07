import { useNavigate, Navigate, useRoutes, Route } from 'react-router-dom';
import ContactForm from './views/ChatForm';
import Home from './views/Home';
import Services from './views/Services';
import Benefits from './views/Benefits';
import Roadmap from './views/Roadmap';
import Navbar from './components/Navbar'

export default function Router() {
 const navigate = useNavigate();
     const routes = useRoutes([
{
    path: '/',
    element: <Navbar />,
    children: [
        { element: <Navigate to="/" />},
        { element: <Home />},
        { element: <Services  /> },
        { element: <Benefits/> },
        { element: <Roadmap /> },
]
},
    // {
    //     path: '',
    //     element: <Home />
    // },
    // { 
    //     path: '',
    //     element: <Services />
    // },
    // { 
    //     path: '',
    //     element: <Benefits />
    // },
    // { 
    //     path: '',
    //     element: <Roadmap />
    // },
    {
        path: '/contact',
        element: <ContactForm />
    },
    ])
    return routes;
 }