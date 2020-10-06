import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggler = (props) => {
  const context = useContext(ThemeContext);
  const btnText = context.isLightTheme ? "Light 🌞" : "Dark 🌚";
  const toggleTheme = context.toggleTheme;

  return (
    <button className={`button is-light rounded`} onClick={toggleTheme}>
      {btnText}
    </button>
  );
};

function Settings() {
  return (
    <div className="container mt-3">
      <h1 className="is-size-3 has-text-weight-bold">Page Settings</h1>
      <div className="columns mt-2">
        <div className="column is-three-quarters">
          <p className="is-size-5"> Change color theme: </p>
        </div>
        <div className="column">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}

export default Settings;
