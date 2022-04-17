import React, { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import styled from "styled-components";
import swal from "sweetalert";
import { sha256 } from "js-sha256";

import moment from "moment";

const NomorDelapan = ({ title }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Content>
        <Card className="h-100">
          <CardHeader>{title}</CardHeader>
          <Card.Body className="d-grid">
            <div className="mb-5">
              <Button
                onClick={() => setShow(!show)}
                size="sm"
                variant="primary"
              >
                Click to Show Answer
              </Button>
            </div>
            {show ? (
              <>
                <p>
                  1. Pada variable rawData ada kurang penulisan koma(,), di line
                  22 dimana seharusnya ditulis untuk pemisah objek selanjutnya
                </p>
                <p>
                  2. Pada variable rawData ada kurang penutup kutip(") , di line
                  429 yang harusnya dituliskan sebelum koma(,)
                </p>
                <p>
                  3. Pada variable rawData di line 437 atribute "valueAsString",
                  tidak bertuliskan apa apa, yang mana harusnya diisi setidaknya
                  string kosong ("") atau angka nol 0 jika memang tidak ada
                  valuenya
                </p>
                <p>
                  4. Pada function compareDeep2() line 538, seharusnya adalah
                  b.atribute bukan b.atributes, karena "atributes" merupakan
                  sebuah kumpulan dari objek sedangkan function match tidak bisa
                  digunakan untuk objek.
                </p>
                <p>
                  5. Pada function compareDeep2() line 540, kurang penulisan
                  index pada array cleanA[] yang seharusnya menjadi cleanA[i].
                </p>
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

export default NomorDelapan;
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
