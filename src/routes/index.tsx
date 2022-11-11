import { Route, Routes as Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

export function Routes() {
  return (
    <Switch>
      <Route path='/' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Switch>
  )
}