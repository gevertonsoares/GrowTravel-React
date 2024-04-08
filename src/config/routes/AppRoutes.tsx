import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Planos } from "../../pages/Planos";
import { QuemSomos } from "../../pages/QuemSomos";
import { Servicos } from "../../pages/Servicos";
import { Contato } from "../../pages/Contato";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Planos',
        element: <Planos />
    },
    {
        path: '/QuemSomos',
        element: <QuemSomos />
    },
    {
        path: '/Servicos',
        element: <Servicos />
    },
    {
        path: '/Contato',
        element: <Contato />
    },
    
]);

const AppRoutes: React.FC = () =>  {
    return <RouterProvider  router={router} />
}

export default AppRoutes