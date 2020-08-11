import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Incident from '../Incident';
import Camera from '../Camera';
import Vms from '../Vms';
import Parking from '../Parking';
import Beacons from '../Beacons';
import ATCC from '../ATCC';

  
/**
 * React router configuration
 */
export default () => (
    <Switch>
      <Route path="/cctv" component={Camera} />
      <Route path="/ims" component={Incident} />
      <Route path="/vms" component={Vms} />
      <Route path="/parking" component={Parking} />
      <Route path="/beacons" component={Beacons} />
      <Route path="/atcc" component={ATCC} />
    </Switch>
);
