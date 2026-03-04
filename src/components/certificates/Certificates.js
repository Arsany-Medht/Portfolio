import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GiDiploma } from "react-icons/gi";

// استيراد شهاداتك كصور SVG
import AI from "../../components/certificates/Ai.svg";
import BI from "../../components/certificates/BI.svg";
import Tofel from "../../components/certificates/tofel.svg";
import Tofele from "../../components/certificates/tofele.png"; // الجديد ✅

function CertificatesPage() {
  const certificates = [
    { image: AI, title: "AI Certificate" },
    { image: BI, title: "AI Certificate" },
    { image: Tofel, title: "Tofel Certificate" },
    { image: Tofele, title: "IEEE SUTECH" }, // الجديد ✅
  ];

  return (
    <section>
      <Container fluid className="certificates-section" id="certificates">
        <Container className="certificates-content" style={{ paddingTop: "50px" }}>
          
          <br />
          <br />

          <h1
            style={{
              color: "#6d20c5d7",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <GiDiploma style={{ marginBottom: "5px" }} /> My Certificates
          </h1>

          <Row style={{ justifyContent: "center", gap: "20px" }}>
            {certificates.map((cert, idx) => (
              <Col md={4} sm={6} xs={12} key={idx}>
                <Card
                  style={{
                    border: "2px solid rgba(200, 137, 230, 0.637)",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      maxHeight: "300px",
                      objectFit: "contain",
                      padding: "15px",
                    }}
                  />

                  <Card.Body>
                    <Card.Title
                      style={{
                        color: "#6d20c5d7",
                        textAlign: "center",
                      }}
                    >
                      {cert.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>
      </Container>
    </section>
  );
}

export default CertificatesPage;
