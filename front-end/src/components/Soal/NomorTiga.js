import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import styled from "styled-components";
import swal from "sweetalert";

const NomorTiga = ({ title, content, button }) => {
  const [data, setData] = useState();
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchApi();
  }, []);
  const maxData = 10;
  const fetchApi = async () => {
    const res = await fetch("http://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    setData(result);
  };

  const handleDelete = (id) => {
    swal("Are you sure to delete post?", {
      dangerMode: true,
      cancel: true,
      buttons: true,
      icon: "warning",
    }).then((result) => {
      fetch("http://jsonplaceholder.typicode.com/posts/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          res.json();
          swal(`Data Nomor ${id} Berhasil di hapus!`, "", "success");
        }) // or res.json()
        .then((res) => console.log(res));
    });
  };
  return (
    <>
      <Content>
        <Card className="h-100">
          <CardHeader>{title} </CardHeader>
          <Card.Body className="d-grid">
            <div>
              <Button
                onClick={() => setShow(!show)}
                size="sm"
                variant="primary"
              >
                Click to Show Answer
              </Button>
            </div>
            <div>
              {show ? (
                <>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        {trigger === false ? <th>UserId</th> : <></>}
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.slice(0, 10).map((item, idx) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.body}</td>
                          {trigger === false ? <td>{item.userId}</td> : <></>}
                          <td>
                            <div className="d-flex">
                              <Button
                                variant="danger"
                                onClick={() => handleDelete(item.id)}
                                size="sm"
                                style={{ marginRight: 5 }}
                              >
                                Delete
                              </Button>
                              <Button
                                variant="danger"
                                onClick={() => setTrigger(!trigger)}
                                size="sm"
                              >
                                Delete userId
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </>
              ) : (
                <></>
              )}
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

export default NomorTiga;
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
