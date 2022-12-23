
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavBar/>
      <div className = "container">
      <Switch>
        <Route path ="/" exact>
          <HomePage/>
        </Route>
        <Route path ="/blogs" exact>
          <ListPage/>
        </Route>
        <Route path ="/blogs/create" exact>
          <CreatePage/>
        </Route>
        <Route path ="/blogs/eidt" exact>
          <EditPage/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
