import styled from "styled-components";
import Card from "./Card";

const Proyects = () => {
  return (
    <Container>
      <div className="text-main-proyects"></div>
      <section className="cards-proyects">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Container>
  );
};

export default Proyects;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  grid-template-rows: 10% 90%;
  animation: showing 0.5s ease-in-out;

  .cards-proyects {
    display: grid;
    grid-template-rows: repeat(4, 10rem);
    gap: 1rem;
    width: 90%;
    height: 80%;
    margin: auto;
    overflow: auto;
    padding-right: 0.5rem;
  }
  @media screen and (min-width: 720px) {
    .cards-proyects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 1rem;
      width: 60%;
      height: 80%;
      margin: auto;
      overflow: auto;
      padding-right: 0.5rem;

      .card {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
  }
`;
