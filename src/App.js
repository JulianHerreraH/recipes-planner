import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Settings from "./Components/Settings";
import RecipeList from "./Components/RecipeList";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.light : context.dark;
  return (
    <Router>
      <div className={`${theme} full-height`}>
        <Navbar />
        <div className={theme}>
          <Switch>
            <Route exact path="/"> 
              <RecipeList />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
