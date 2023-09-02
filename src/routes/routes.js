import { createBrowserRouter } from "react-router-dom";
import { Home1 } from "../pages/Home1";
import React from "react";
import { Home2 } from "../pages/Home2";
import { Home3 } from "../pages/Home3";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home1 />,
    },
    {
        path: '/home2',
        element: <Home2 />,
    },
    {
        path: '/home3',
        element: <Home3 />,
    }
])