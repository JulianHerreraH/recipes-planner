import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: "has-background-grey-lighter has-text-grey-dark",
    dark: "has-background-black has-text-white",
    navLight: "is-white",
    navDark: "is-dark",
    cardLight: "has-background-white has-text-grey-dark",
    cardDark: "has-background-dark has-text-white",
  };

  toggleTheme = () => {
    this.setState((prevState, props) => {
      return { isLightTheme: !prevState.isLightTheme };
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
