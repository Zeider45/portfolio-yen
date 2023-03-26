import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BsBookHalf,
  BsFillHouseDoorFill,
  BsFillNutFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { useRef } from "react";

const NavBar = ({
  texts,
  changeTexts,
  changheTheme,
  changeBackgroundEnter,
}) => {
  const settingsRef = useRef();
  const navRef = useRef();
  const btnSettingsRef = useRef();
  const btnChangeTheme = useRef();

  const getTexts = () => {
    let settings = JSON.parse(localStorage.getItem("settings-page"));
    return settings && settings.language;
  };

  const getTheme = () => {
    let settings = JSON.parse(localStorage.getItem("settings-page"));
    return settings && settings.theme;
  };

  const setThemeStyle = () => {
    let theme = getTheme();
    let btnChange = btnChangeTheme.current;
    let nav = navRef.current;
    if (theme == "dark") {
      btnChange.style.left = "1.7rem";
      nav.style.boxShadow = "3px 3px 15px #44484488";
      changheTheme("ligh");
    }
    if (theme == "ligh") {
      btnChange.style.left = "0rem";
      nav.style.boxShadow = "none";
      changheTheme("dark");
    }
  };

  const handleShowSettings = () => {
    const settingsContainer = settingsRef.current;
    const btnSettings = btnSettingsRef.current;

    if (settingsContainer.style.display == "") {
      settingsContainer.style.display = "none";
    }
    if (settingsContainer.style.display == "none") {
      settingsContainer.style.display = "grid";
      settingsContainer.style.animation = "show 1s";
      btnSettings.style.animation = "spin 1s";
    } else {
      settingsContainer.style.animation = "hide 1s";
      btnSettings.style.animation = "spin-reverse 1s";
      setTimeout(() => {
        settingsContainer.style.display = "none";
      }, 900);
    }
  };

  return (
    <Container>
      <nav
        ref={navRef}
        className={`nav-bar ${getTheme() == "ligh" && "nav-bar-with-shadow"}`}
      >
        <div className="nav-options">
          <Link
            onMouseEnter={() =>
              changeBackgroundEnter("#3395aa33", "transparent", "#d365b722")
            }
            to="/"
            className="home btn-option"
          >
            <span>{<BsFillHouseDoorFill />}</span>
            <p>{texts.optionsNav[0]}</p>
          </Link>
          <Link
            onMouseEnter={() =>
              changeBackgroundEnter("#33a57a44", "transparent", "#a355be44")
            }
            to="/about"
            className="about-me btn-option"
          >
            <span>{<BsFillPersonFill />}</span>
            <p>{texts.optionsNav[1]}</p>
          </Link>
          <Link
            onMouseEnter={() =>
              changeBackgroundEnter("#a33fba44", "transparent", "#57d4cc44")
            }
            to="/proyects"
            className="proyects btn-option"
          >
            <span>{<BsBookHalf />}</span>
            <p>{texts.optionsNav[2]}</p>
          </Link>
          <div className="btn-settings-container">
            <button
              onClick={handleShowSettings}
              ref={btnSettingsRef}
              className="btn-settings"
            >
              {<BsFillNutFill />}
            </button>
            <div ref={settingsRef} className="options-settings">
              <button className="change-theme" onClick={setThemeStyle}>
                <div
                  ref={btnChangeTheme}
                  className={`${
                    getTheme() == "dark"
                      ? "ball-theme"
                      : "ball-theme activate-theme"
                  }`}
                ></div>
              </button>
              <button className="btn-change-texts">
                <div
                  onClick={() => changeTexts("es")}
                  className={`btn-es ${getTexts() == "es" && "activate"}`}
                >
                  es
                </div>
                <div
                  onClick={() => changeTexts("en")}
                  className={`btn-en ${getTexts() == "en" && "activate"}`}
                >
                  en
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  width: 100%;
  height: 100%;

  .nav-bar-with-shadow {
    box-shadow: 3px 3px 15px #44484488;
  }

  .nav-bar {
    position: relative;
    height: 100%;
    background: var(--background-second);

    .nav-options {
      font-size: 1.5rem;
      padding: 0rem 1rem;
      display: flex;
      height: 100%;
      list-style: none;
      align-items: center;
      justify-content: space-around;
      grid-template-rows: 1fr;
      color: var(--text-color);

      .btn-option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-color);
        text-decoration: none;
        cursor: pointer;
        transition: all 0.5s;

        p {
          display: none;
        }
        span {
          position: relative;
          top: 0.1rem;
        }
      }
      .btn-option:hover {
        color: var(--second-color);
      }

      .btn-settings-container {
        display: flex;
        position: relative;
        align-items: center;
        .btn-settings {
          position: relative;
          display: flex;
          align-items: center;
          top: -0.2rem;
          background: transparent;
          color: var(--text-color);
          border: none;
          outline: none;
          font-size: 1.5rem;
          transition: all ease-in-out 0.5s;
          cursor: pointer;
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-reverse {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          .change-theme {
          }
        }

        .btn-settings:hover {
          color: var(--second-color);
        }

        .options-settings {
          display: none;
          position: absolute;
          grid-template-rows: 50% 50%;
          top: -5.5rem;
          right: -1.2rem;
          height: 4rem;
          width: 4rem;
          border-radius: 0.5rem;
          padding: 0.5rem;
          gap: 0.1rem;
          background: var(--background-second);
          animation: show 1s;

          @keyframes show {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes hide {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .change-theme {
            position: relative;
            height: 1.2rem;
            border-radius: 0.8rem;
            outline: none;
            border: none;
            background-color: var(--background-firts);
            padding: 0.1rem;
            width: 100%;
            cursor: pointer;
            transition: all 1s;

            .ball-theme {
              position: relative;
              left: 0;
              height: 100%;
              width: 1rem;
              border-radius: 50%;
              background: var(--text-color);
            }

            .activate-theme {
              left: 1.7rem;
            }
          }

          .btn-change-texts {
            display: grid;
            grid-template-columns: 50% 50%;
            height: 1.2rem;
            border-radius: 0.5rem;
            outline: none;
            border: none;
            align-items: center;
            color: var(--text-color);
            align-items: center;
            background-color: var(--background-firts);
            overflow: hidden;
            cursor: pointer;

            .btn-es {
              width: 100%;
              height: 100%;
              cursor: pointer;
            }
            .btn-en {
              width: 100%;
              height: 100%;
              cursor: pointer;
            }

            .activate {
              background: var(--second-color);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 720px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .nav-bar {
      position: relative;
      height: 60%;
      width: 60%;
      background: var(--background-second);
      border-radius: 1.5rem;
      z-index: 999;
      .nav-options {
        font-size: 1.1rem;

        .btn-option {
          p {
            display: inline-block;
          }
        }
        .btn-settings-container {
          .btn-settings {
            top: 0rem;
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1020px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .nav-bar {
      position: relative;
      height: 60%;
      width: 40%;
      background: var(--background-second);
      border-radius: 1.5rem;
      z-index: 999;
    }
  }
`;
