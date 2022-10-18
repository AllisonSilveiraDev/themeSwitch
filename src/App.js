import styled, { ThemeProvider } from "styled-components";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";

import { useState } from "react";

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
  transition: all 1s ease;
`;

const Name = styled.h1`
  margin: 1em;
  color: ${(props) => props.theme.title};
`;

const Info = styled.p`
  margin: 1em;
  color: ${(props) => props.theme.subtitle};
`;

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
  icon: "#b6b6b6",
};

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
};

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MoonIcon />
        <Name>Allison Silveira Dev</Name>
        <Info>React Theme Switcher</Info>
        <Info>Email: allisonsilveiradev@gmail.com</Info>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
