
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import ProductPage from "./pages/ProductPage"
import Shop from "./pages/Shop"
import Order from "./pages/Order"
import Success from "./pages/Success"

import { ADMIN_ROUTE, PRODUCT_ROUTE , BASKET_ROUTE , SHOP_ROUTE , 
         LOGIN_ROUTE, REGISTRATION_ROUTE, ORDER_ROUTE, SUCCESS_ROUTE, PERSONAL_ROUTE} from "./utils/consts"
import Personal from "./pages/Personal"

export const authRoutes =  [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: ORDER_ROUTE,
        Component: <Order/>
    },
    {
        path: SUCCESS_ROUTE,
        Component: <Success/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: <ProductPage />
    },
    {
        path: PERSONAL_ROUTE ,
        Component: <Personal />
    }
]

