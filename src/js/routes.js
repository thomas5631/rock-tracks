import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import TrackDetails from './apps/TrackDetails/routes';
import TrackList from './apps/TrackList/routes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {TrackDetails}
      {TrackList}
    </Switch>
  </BrowserRouter>
);

export default Routes;
