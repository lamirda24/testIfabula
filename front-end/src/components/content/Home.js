import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

import NomorSatu from "../Soal/NomorSatu";
import NomorTiga from "../Soal/NomorTiga";
import NomorTujuh from "../Soal/NomorTujuh";
import NomorDelapan from "../Soal/NomorDelapan";

const Home = () => {
  return (
    <Container>
      <Cards>
        <CardHeader>
          <h3>Home</h3>
        </CardHeader>
        <Card.Body>
          <Wrapper>
            <NomorSatu title="Nomor [1, 2]" />
            <NomorTiga title="Nomor [3, 4, 5, 6]" />
            <NomorTujuh title="Nomor [7] - Hashing" />
            <NomorDelapan title="Nomor [8] - Test Debug" />
          </Wrapper>
        </Card.Body>
      </Cards>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  position: relative;
  display: grid;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
`;
const Cards = styled.div`
  //   position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(100px, auto);
`;

const CardHeader = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  justify-content: space-between;
`;
