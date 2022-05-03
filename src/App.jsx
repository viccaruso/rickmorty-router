import { Redirect } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <Link to="/">{'< All Characters'}</Link>
        <p>Character detail goes here</p>
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route exact path="/">
        <Redirect to="/characters" />
      </Route>
    </Switch>
  );
}
