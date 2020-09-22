import React from 'react';
import Navbar from './Components/Navbar';
import RecipeList from './Components/RecipeList';

function App() {
  return (
    <div className="App has-background-dark has-text-white">
      <Navbar />
      <div className="container">
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
