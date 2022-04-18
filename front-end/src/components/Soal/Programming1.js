import React, { useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";

const Programming1 = ({ title }) => {
  const [data, setData] = useState({
    number3: 0,
    number4: 0,
  });

  const nomorSatu = () => {
    const start = 50;
    const end = 100;
    console.group("Jawaban Nomor 1");
    for (let i = start; i <= end; i += 5) {
      if (i <= 60) {
        console.log(i, "Kurang");
      } else if (i > 60 && i <= 70) {
        console.log(i, "Cukup");
      } else if (i > 70 && i <= 80) {
        console.log(i, "Baik");
      } else if (i > 80) {
        console.log(i, "Luar Biasa");
      }
    }
    console.groupEnd();
  };
  const nomorDua = () => {
    const number = 20;
    let n1 = 0;
    let n2 = 1;
    let res = 0;
    console.group("Jawaban Nomor 2");
    for (let i = 1; i <= number; i++) {
      console.log(n1);
      res = n1 + n2;
      n1 = n2;
      n2 = res;
    }
    console.groupEnd();
  };

  const nomorTiga = () => {
    let e = data.number3;
    let string = "";
    for (let i = 1; i <= e; i++) {
      for (let j = 1; j <= i; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.group("Jawaban Nomor 3");
    console.log("x = ", e);
    console.log(string);
    console.groupEnd();
  };

  const nomorEmpat = () => {
    let e = data.number4;
    let number = [
      "",
      "satu",
      "dua",
      "tiga",
      "empat",
      "lima",
      "enam",
      "tujuh",
      "delapan",
      "sembilan",
    ];
    let x = e?.toString().split("");
    let ribu = "";
    let ratus = "";
    let puluh = "";
    let satuan = "";

    for (let i = 0; i <= number.length; i++) {
      if (x[0] == i) {
        ribu += number[i] + " ribu";
      }
      if (x[1] == i && i !== 0) {
        ratus += number[i] + " ratus";
      }
      if (x[2] == i && i !== 0) {
        if (x[2] == 1) {
          puluh += "";
        } else {
          puluh += number[i] + " puluh";
        }
      }
      if (x[3] == i) {
        if (x[2] == 1) {
          if (x[3] > 1) {
            satuan += number[i] + " belas";
          } else if (x[3] == 1) {
            satuan += "sebelas";
          } else if (x[3] == 0) {
            satuan += "sepuluh";
          }
        } else {
          satuan += number[i];
        }
      }
    }
    console.group("Jawaban Nomor 4");
    console.log("x = ", e);
    console.log(ribu, ratus, puluh, satuan);
    console.groupEnd();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <Content>
        <Card className="h-100">
          <CardHeader>{title} </CardHeader>
          <Card.Body className="d-grid">
            <div style={{ margin: 10 }}>
              <Button onClick={nomorSatu} size="sm">
                Nomor 1
              </Button>
            </div>
            <div style={{ margin: 10 }}>
              <Button onClick={nomorDua} size="sm">
                Nomor 2
              </Button>
            </div>
            <div style={{ margin: 10 }}>
              <InputGroup className="mb-3">
                <Button onClick={nomorTiga} size="sm">
                  Nomor 3
                </Button>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  type="number"
                  onChange={handleChange}
                  name="number3"
                />
              </InputGroup>
            </div>
            <div style={{ margin: 10 }}>
              <InputGroup className="mb-3">
                <Button onClick={nomorEmpat} size="sm">
                  Nomor 4
                </Button>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  type="number"
                  onChange={handleChange}
                  name="number4"
                  min={2000}
                  max={9999}
                />
              </InputGroup>
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

export default Programming1;
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
