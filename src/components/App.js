import React from 'react';
import {  HashRouter,Route, BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './LandingPage';
import PrimariaInferior from './PrimariaInferior';
import Header from './Header';
import DecidirNivel from './DecidirNivel';
import PrimariaSuperior from './PrimariaSuperior';
import GameScreen from './GameScreen';
import ExamScreen from './ExamScreen';
//import SignUpPage from './SignUp';
//import SignInPage from './SignIn';
import * as routes from '../constants/routes';


const App = () => {
return (
  <HashRouter>

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
      <Route
      exact path={routes.EXAMS}
      component={ExamScreen}
      />
      </div>
  </HashRouter>
);
}
export default App;
