import styled from "styled-components";
import myImg from "../assets/my_img.png";
import {
  BsDownload,
  BsArrowClockwise,
  BsCheckLg,
  BsEnvelope,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const Main = ({ texts, changeBackgroundEnter }) => {
  return (
    <Container className="section-main">
      <div className="introduction-container">
        <div className="details-container">
          <div className="texts-container">
            <h1
              onMouseEnter={() =>
                changeBackgroundEnter("#33a5aa44", "transparent", "#3355ae44")
              }
              className="main-text"
            >
              {texts.mainText}
            </h1>
            <p className="welcoming-text">{texts.welcomingText}</p>
          </div>
          <div className="picture-container">
            <img src={myImg} alt="" />
          </div>
        </div>
        <div className="btn-download-container">
          <a
            onMouseEnter={() =>
              changeBackgroundEnter("#33a5ba44", "transparent", "#3385ae44")
            }
            href="./curriculum.pdf"
            download
            className="download-file"
          >
            {texts.btnDownload}
            <span className="download"> {<BsDownload />}</span>
            <span className="loading">{<BsArrowClockwise />} </span>
            <span className="ready"> {<BsCheckLg />}</span>
          </a>
        </div>
        <div className="contact-info">
          <p>
            <span>{<BsEnvelope />} </span>
            yender.yr45@gmail.com
          </p>
          <a
            href="https://www.linkedin.com/in/yender-rodriguez-470b6726b/"
            target="_blank"
          >
            {<BsLinkedin />}
          </a>
          <a href="https://github.com/Yennic0302" target="_blank">
            {<BsGithub />}
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  animation: showing 0.5s ease-in-out;

  .introduction-container {
    display: grid;
    height: 80%;
    gap: 2rem;
    grid-template-rows: 70% 15% 15%;

    .details-container {
      display: flex;
      flex-direction: column-reverse;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;

      .texts-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.5rem;

        .main-text {
          color: var(--first-color);
          font-size: 2.5rem;
        }

        .welcoming-text {
          color: var(--text-color);
        }
      }

      .picture-container {
        width: 10rem;
        height: 12rem;
        border-radius: 20% 20% 40%;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }

    .btn-download-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .download-file {
        display: flex;
        font-size: 1rem;
        padding: 0.5rem;
        color: var(--text-color);
        background: var(--first-color);
        border: none;
        border-radius: 1rem;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        transition: all 0.5s;
        box-shadow: 3px 3px 15px #44484488;
        font-weight: bold;

        .download {
          display: block;
          font-size: 1rem;
          position: relative;
          margin-left: 0.5rem;
          top: 0.1rem;
        }
        .loading {
          display: none;
          font-size: 1rem;
          position: relative;
          height: 1rem;
          width: 1rem;
          margin-left: 0.5rem;
          top: 0.1rem;
          animation: loading 0.7s ease-in-out infinite;

          @keyframes loading {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        }
        .ready {
          display: none;
          font-size: 1rem;
          position: relative;
          margin-left: 0.5rem;
          top: 0.1rem;
        }
      }

      .download-file:hover {
        background-color: var(--second-color);
      }
    }

    .contact-info {
      font-size: 1.2rem;
      padding-left: 1rem;
      p {
        color: var(--text-color);
        margin-bottom: 0.5rem;
        a,
        span {
          position: relative;
          color: var(--first-color);
          margin-right: 0.5rem;
          top: 0.2rem;
        }
      }
      a {
        font-size: 2rem;
        position: relative;
        color: var(--first-color);
        margin-right: 0.5rem;
        top: 0.2rem;
      }
    }
  }

  @keyframes showing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 720px) {
    .introduction-container {
      height: 70%;
      width: 80%;
      gap: 1rem;
      margin-left: 4.5rem;
      grid-template-rows: 60% 20% 20%;
      .details-container {
        display: flex;
        justify-content: flex-end;
        flex-direction: row-reverse;
        .texts-container {
          max-width: 600px;
          margin-left: 2rem;
          .main-text {
            color: var(--first-color);
            font-size: 3.5rem;
          }

          .welcoming-text {
            font-size: 1.3rem;
            color: var(--text-color);
          }
        }
        .picture-container {
          width: 50%;
          height: 15rem;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
      .btn-download-container {
        justify-content: flex-start;
      }
    }
  }

  @media screen and (min-width: 1070px) {
    .introduction-container {
      .details-container {
        .picture-container {
          width: 18%;
          height: 13rem;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;
