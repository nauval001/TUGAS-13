import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const BlankPage = lazy(() => import('./general-pages/BlankPage'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          {/* Route untuk Blank Page */}
          <Route path="/general-pages/blank-page" component={ BlankPage } />

          {/* Redirect root (/) langsung ke Blank Page */}
          <Redirect to="/general-pages/blank-page" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;