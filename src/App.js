import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => (
    <div className = "app">
        <Header/>
        <Outlet />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <AboutUs />
            },
            {
                path:"/ContactUs",
                element: <ContactUs />
            },
            {
                path:"/restaurant/:resID",
                element:<RestaurantMenu />,
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);