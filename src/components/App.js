import React from 'react';
import {  Route, BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './LandingPage';
import PrimariaInferior from './PrimariaInferior';
import Header from './Header';
import DecidirNivel from './DecidirNivel';
import PrimariaSuperior from './PrimariaSuperior';
import GameScreen from './GameScreen'
//import SignUpPage from './SignUp';
//import SignInPage from './SignIn';



import * as routes from '../constants/routes';


const App = () => {
return (
  <Router>

  <div>
  <Header />
      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.PRIMARIAINF}
        component={() => <PrimariaInferior />}
      />
      <Route
        exact path={routes.DECIDIRNIVEL}
        component={() => <DecidirNivel />}
      />
      <Route
        exact path={routes.PRIMARIASUP}
        component={() => <PrimariaSuperior />}
      />
      <Route
      exact path={routes.GAMES}
      component={GameScreen}
      />
      </div>
  </Router>
);
}
export default App;
