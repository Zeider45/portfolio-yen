import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import languages from "./utils/languages.json";
import { useState } from "react";
import About from "./components/About";
import Proyects from "./components/Proyects";
import { useEffect } from "react";

function App() {
  const [language, setLanguage] = useState(languages.es);

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

  const changeLanguage = (language) => {
    if (language == "es") {
      setLanguage(languages.es);
      const settingsPage = JSON.parse(localStorage.getItem("settings-page"));
      localStorage.setItem(
        "settings-page",
        JSON.stringify({ ...settingsPage, language })
      );
    }
    if (language == "en") {
      setLanguage(languages.en);
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
      changeLanguage(settingsPage.language);
      changheTheme(settingsPage.theme);
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/proyects" element={<Proyects language={language} />} />
      </Routes>
      <NavBar
        language={language}
        changeLanguage={changeLanguage}
        changheTheme={changheTheme}
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
  overflow-y: hidden;

  @media screen and (min-width: 720px) {
    grid-template-rows: 85% 15%;
  }
`;
