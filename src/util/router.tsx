import { createBrowserRouter } from "react-router-dom";
import Login from "../views/components/auth/Login";
import ProtectedRoute from "../views/components/ProtectedRoute";
import Home from "../views/layout/Home";
import Product from "../views/components/stock/product/Product";
import RefCodeGroup from "../views/components/setting/ref-data/ref-code-group/RefCodeGroup";
export const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/",
        element: <ProtectedRoute/>,
        children:[
            {
                element: <Home/>,
                children:[
                    {
                        index: true,
                        element:<></>
                    },
                    {
                        path:"setting",
                        children: [    
                            {
                                path:"refCdeGroup",
                                element: <RefCodeGroup/>
                            },
                        ]
                    },
                    {
                        path:"stock",
                        children: [    
                            {
                                path:"product",
                                element: <Product/>
                            },
                        ]
                    },
                ]
            }
        ]
    }
])




