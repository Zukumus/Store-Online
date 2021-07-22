import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Basket from './pages/Basket';
import DevicePage from './pages/DevicePage';
import Shop from './pages/Shop';
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from './utils/const';

export const authRoutes = [
   {
      path: ADMIN_ROUTE,
      component: Admin
   },
   {
      path: BASKET_ROUTE,
      component: Basket
   },

]


export const publicRoutes = [
   {
      path: SHOP_ROUTE,
      component: Shop
   },
   {
      path: DEVICE_ROUTE + '/:id',
      component: DevicePage
   },
   {
      path: LOGIN_ROUTE,
      component: Auth
   },
   {
      path: REGISTER_ROUTE,
      component: Auth
   },

]