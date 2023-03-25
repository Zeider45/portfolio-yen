import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import languages from "./utils/languages.json";
import { useState } from "react";

function App() {
  const [language, setLenguage] = useState(languages.es);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main language={language} />} />
      </Routes>
      <NavBar language={language}></NavBar>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 90% 10%;
  overflow-y: hidden;

  @media screen and (min-width: 720px) {
    grid-template-rows: 85% 15%;
  }
`;
