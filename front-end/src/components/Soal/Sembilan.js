import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sembilan = ({ title, content, button }) => {
  return (
    <>
      <Content>
        <Card className="h-100">
          <CardHeader>{title} </CardHeader>
          <Card.Body className="d-flex">
            <div>
              <Link to="/no9">
                <Button size="sm">Go to Page</Button>
              </Link>
            </div>
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

export default Sembilan;
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
