import React from 'react';
import { Route } from 'react-router-dom';
import TrackDetails from '.';

const route = <Route path="/details/:trackId" exact component={TrackDetails} />;

export const constructTrackDetailsUrl = trackId => (`/details/${trackId}`);

export default route;
