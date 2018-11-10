import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './apps/Home/routes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {Home}
    </Switch>
  </BrowserRouter>
);

export default Routes;
