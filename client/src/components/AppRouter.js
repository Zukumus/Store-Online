import React, { useContext } from "react";
import { Context } from '../index';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from "../utils/const";

const AppRouter = () => {
   const { user } = useContext(Context);

   return (
      <Switch>
         {user.isAuth === true && authRoutes.map(({ path, component }) =>
            <Route key={path} path={path} component={component} exact />
         )}
         {publicRoutes.map(({ path, component }) =>
            <Route key={path} path={path} component={component} exact />
         )}
         <Redirect to={SHOP_ROUTE} />
      </Switch>
   );
};

export default AppRouter