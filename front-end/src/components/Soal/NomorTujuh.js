import React, { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import styled from "styled-components";
import swal from "sweetalert";
import { sha256 } from "js-sha256";

import moment from "moment";

const NomorTujuh = ({ title }) => {
  const [answer, setAnswer] = useState();
  const handleClick = () => {
    const date = moment().format("DDMMYYYY");
    const hash = sha256(date + "Luthfi" + "pria" + "ifabula");
    setAnswer(hash);
  };
  return (
    <>
      <Content>
        <Card className="h-100">
          <CardHeader>{title} </CardHeader>
          <Card.Body className="d-grid">
            <div className="mb-5">
              <Button onClick={handleClick} size="sm" variant="primary">
                Click to Show Answer
              </Button>
            </div>
            <div>
              hasil hash256 : {moment().format("DDMMYYYY")} Luthfi pria fabula
              <div>{answer}</div>
            </div>
          </Card.Body>
          <Card.Footer
            className="text-muted"
            style={{
              display: "flex",
              fontSize: 11,
              justifyContent: "flex-end",
            }}
          ></Card.Footer>
        </Card>
      </Content>
    </>
  );
};

export default NomorTujuh;
const CardHeader = styled.div`
  display:flex;
  height:40px;
  font-size: 20px;
  font-weight: 600;
  padding: 0.5rem 1rem; 
  margin-bottom: 1rem;
  background-color: 
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Label = styled.div`
  padding: 0px 5px;
  margin: 5px 5px;
  font-size: 15px;
  font-weight: 600;
`;
