import React from 'react';
import { Route, Switch } from "react-router-dom";
import routeLinks from '../config/routes';

export const AppContent = () => (
  <div className="app">
    <Switch>
      { 
        routeLinks.map((route) => (
          <Route exact path={route.path}>
            { route.component }
          </Route>
        ))
      }
    </Switch>
  </div>
);

export default AppContent;
