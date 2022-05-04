import { Redirect } from 'react-router-dom';
import { Route, Switch, useHistory } from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import CharacterList from './views/CharacterList';

export default function App() {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <Switch>
      <Route path="/characters/:id">
        <button type="button" onClick={handleClick}>
          Go Home
        </button>
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
