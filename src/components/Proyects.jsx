import styled from "styled-components";

const Proyects = () => {
  return (
    <Container>
      <div className="text-main-proyects"></div>
      <div className="cards-proyects"></div>
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
`;
