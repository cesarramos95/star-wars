import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import People from '../pages/People';
import Starship from '../pages/Starship';
import SpecieDetail from '../pages/SpecieDetail';
import PilotDetail from '../pages/PilotDetail';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/people" component={People} />
    <Route path="/starships" component={Starship} />
    <Route path="/detail/species/:id" component={SpecieDetail} />
    <Route path="/detail/pilots/:id" component={PilotDetail} />
  </Switch>
);

export default Routes;
