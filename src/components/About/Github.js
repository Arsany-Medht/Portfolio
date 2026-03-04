import React from "react";
import { Row, Col } from "react-bootstrap";

function HowIBuild() {
  return (
    <Row
      style={{
        color: "white",
        paddingBottom: "50px",
      }}
    >
      <h1 className="project-heading text-center pb-4">
        How I <strong className="purple">Build Software</strong>
      </h1>

      <Col md={6} className="mb-4">
        <h4 className="purple">01. Thinking First</h4>
        <p>
        I start every project by deeply understanding the problem,
         breaking it down into smaller, clear issues,
          and choosing the appropriate tools instead of rushing to write code.
        </p>
      </Col>

      <Col md={6} className="mb-4">
        <h4 className="purple">02. Clean Architecture</h4>
        <p>
          I focus on writing clean, readable, and maintainable code that can grow
          with the project and be easily understood by other developers.
        </p>
      </Col>

      <Col md={6} className="mb-4">
        <h4 className="purple">03. Real Collaboration</h4>
        <p>
          I work efficiently in team environments, communicate clearly, and value
          feedback to deliver better results in less time.
        </p>
      </Col>

      <Col md={6} className="mb-4">
        <h4 className="purple">04. Continuous Improvement</h4>
        <p>
          I constantly improve my skills by building real projects, learning from
          mistakes, and keeping up with modern web development practices.
        </p>
      </Col>
    </Row>
  );
}

export default HowIBuild;
