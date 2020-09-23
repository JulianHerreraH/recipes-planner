import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Favorites from "./Components/Favorites";
import Settings from "./Components/Settings";
import RecipeList from "./Components/RecipeList";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.light : context.dark;
  return (
    <Router>
      <div className={`${theme}`}>
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
