import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <p>You have switched to specific route</p>
      </Route>
      <Route path="/">
        <p>You have switched to the root route</p>
      </Route>
    </Switch>
  );
}
