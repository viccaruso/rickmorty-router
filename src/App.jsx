import { Redirect } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <Link to="/">{'< All Characters'}</Link>
        <CharacterCard />
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
