import React from 'react';
import { NavLink } from "react-router-dom";
import { appBarLinks } from '../../config/routes';

export const AppBar = () => (
  <div className="navbar-menu">
    <ul>
      { 
        appBarLinks.map((route) => (
          <li>
            <NavLink exact to={route.path}>
              { route.title }
            </NavLink>
          </li>
        ))
      }
    </ul>
  </div>
);

export default AppBar;
