import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Content;

const Container = styled.div`
  height: 100vh;
  padding: 20px;
  // width: 100vw;
`;
