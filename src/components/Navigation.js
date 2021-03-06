import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.PRIMARIAINF}>PRIMARIAINF</Link></li>
      <li><Link to={routes.PRIMARIASUP}>PRIMARIASUP</Link></li>
    </ul>
  </div>

export default Navigation;
