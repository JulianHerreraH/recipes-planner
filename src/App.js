import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Favorites from './Components/Favorites';
import Settings from './Components/Settings';
import RecipeList from './Components/RecipeList';

function App() {
  return (
    <Router>
      <div className="App has-background-dark has-text-white">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={RecipeList} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
