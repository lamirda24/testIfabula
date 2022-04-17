import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";

const NomorSembilan = () => {
  const username = localStorage?.getItem("username");
  const [loggedin, setLoggedin] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const login = () => {
    setLoggedin(true);
    localStorage.setItem("username", data.username);
    localStorage.setItem("password", data.password);
  };
  const handleSubmit = () => {
    if (data.username !== "" && data.password !== "") {
      login();
      setData({ username: "", password: "" });
    } else if (data.username === "" || data.password === "") {
      swal("Field(s) cannot be empty", "", "warning");
    }
  };

  const handleLogout = () => {
    setLoggedin(false);
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  };
  console.log(loggedin);
  return (
    <>
      <Content>
        <Card className="h-100">
          <CardHeader>
            Nomor [9]
            <Link to="/">
              <Button size="sm">Go back</Button>
            </Link>
          </CardHeader>
          <Card.Body>
            <div>
              <Form>
                {loggedin === false ? (
                  <>
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </>
                ) : (
                  <></>
                )}

                <Form.Group>
                  {loggedin === false ? (
                    <>
                      <Button
                        variant="primary"
                        style={{ marginRight: 5 }}
                        onClick={handleSubmit}
                      >
                        Login
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="danger" onClick={handleLogout}>
                        Logout
                      </Button>
                    </>
                  )}
                </Form.Group>
              </Form>
            </div>
            {loggedin ? (
              <>
                <div style={{ marginTop: 15 }}>
                  <h3>Selamat Datang! {username}</h3>
                </div>
              </>
            ) : (
              <></>
            )}
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

export default NomorSembilan;
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
