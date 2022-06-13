import type { NextPage } from "next";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
  return <Title>Ticked</Title>;
};

export default Home;
