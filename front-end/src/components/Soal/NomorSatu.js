import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

const NomorSatu = ({ title, content, button }) => {
  const [numbers, setNumbers] = useState();
  const data = [
    {
      id: 1,
      label: "One",
    },

    {
      id: 2,
      label: "Two",
    },
    {
      id: 3,
      label: "Three",
    },
    {
      id: 4,
      label: "Four",
    },
    {
      id: 5,
      label: "Five",
    },
  ];

  const handleClick = () => {
    let index = Math.floor(Math.random() * 5);
    setNumbers(data[index].label);
  };

  return (
    <>
      <Content>
        <Card className="h-100">
          <CardHeader>{title} </CardHeader>
          <Card.Body className="d-flex">
            <div>
              <Button onClick={handleClick} size="sm">
                Click Me!
              </Button>
            </div>
            <Label>{numbers}</Label>
          </Card.Body>
          <Card.Footer
            className="text-muted"
            style={{
              display: "flex",
              fontSize: 11,
              justifyContent: "flex-end",
            }}
          >
            {" "}
          </Card.Footer>
        </Card>
      </Content>
    </>
  );
};

export default NomorSatu;
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
`;

const Label = styled.div`
  padding: 0px 5px;
  margin: 5px 5px;
  font-size: 15px;
  font-weight: 600;
`;
