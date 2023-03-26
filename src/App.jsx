import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import languages from "./utils/languages.json";
import { useState } from "react";
import About from "./components/About";
import Proyects from "./components/Proyects";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [texts, setTexts] = useState(languages.es);
  const app = useRef();

  const changeBackgroundLeave = () => {
    app.current.style.background = `linear-gradient(to left, transparent, transparent, transparent`;
  };

  const changeBackgroundEnter = (color1, color2, color3) => {
    app.current.style.background = `linear-gradient(to left, ${color1}, ${color2}, ${color3}`;
  };

  const changheTheme = (theme) => {
    const settingsPage = JSON.parse(localStorage.getItem("settings-page"));
    const $html = document.documentElement;
    if (theme == "dark") {
      $html.style.setProperty("--background-firts", "#111");
      $html.style.setProperty("--background-second", "#333");
      $html.style.setProperty("--text-color", "#fff");
      localStorage.setItem(
        "settings-page",
        JSON.stringify({ ...settingsPage, theme })
      );
    }
    if (theme == "ligh") {
      $html.style.setProperty("--background-firts", "#fff");
      $html.style.setProperty("--background-second", "#bbb");
      $html.style.setProperty("--text-color", "#111");

      localStorage.setItem(
        "settings-page",
        JSON.stringify({ ...settingsPage, theme })
      );
    }
  };

  const changeTexts = (language) => {
    if (language == "es") {
      setTexts(languages.es);
      const settingsPage = JSON.parse(localStorage.getItem("settings-page"));
      localStorage.setItem(
        "settings-page",
        JSON.stringify({ ...settingsPage, language })
      );
    }
    if (language == "en") {
      setTexts(languages.en);
      const settingsPage = JSON.parse(localStorage.getItem("settings-page"));
      localStorage.setItem(
        "settings-page",
        JSON.stringify({ ...settingsPage, language })
      );
    }
  };

  useEffect(() => {
    const settingsPage = JSON.parse(localStorage.getItem("settings-page"));

    if (!settingsPage) {
      let settings = { language: "es", theme: "dark" };
      localStorage.setItem("settings-page", JSON.stringify(settings));
    } else {
      changeTexts(settingsPage.language);
      changheTheme(settingsPage.theme);
    }
  }, []);

  return (
    <Container ref={app}>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              texts={texts}
              changeBackgroundEnter={changeBackgroundEnter}
              changeBackgroundLeave={changeBackgroundLeave}
            />
          }
        />
        <Route path="/about" element={<About texts={texts} />} />
        <Route path="/proyects" element={<Proyects texts={texts} />} />
      </Routes>
      <NavBar
        texts={texts}
        changeTexts={changeTexts}
        changheTheme={changheTheme}
        changeBackgroundEnter={changeBackgroundEnter}
      ></NavBar>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  max-width: 1370px;
  margin: auto;
  padding: 0;
  display: grid;
  grid-template-rows: 90% 10%;
  background: linear-gradient(to left, transparent, transparent, transparent);
  overflow-y: hidden;

  @media screen and (min-width: 720px) {
    grid-template-rows: 85% 15%;
  }
`;
