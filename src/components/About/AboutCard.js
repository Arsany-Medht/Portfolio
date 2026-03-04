import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Arsany Madht &lt;Arsio/&gt; </span>{" "}
            from <span className="purple">Asyut, Egypt</span>.
            <br />
              I’m currently working as a{" "}
              <span className="purple">Software Developer</span> with a strong passion for web development.
              <br />
              <br />
              I began my technical journey at{" "}
              <span className="purple">WE Applied Technology Schools</span>, where I specialized in{" "}
              <span className="purple">Web Development and Programming</span> over a three-year program.
              I graduated with an outstanding{" "}
              <span className="purple">98% overall score</span>, reflecting my dedication and consistency throughout the learning journey.
              <br />
              <br />
              During my time at WE, I developed a solid foundation in{" "}
              <span className="purple">software engineering principles, teamwork, and soft skills</span>,
              and gained hands-on experience by working on real-world projects in collaboration with my peers.
              I also had the opportunity to train and work within{" "}
              <span className="purple">Telecom Egypt</span> environments, which enhanced my professional mindset and work ethics.
              <br />
              <br />
              In addition to web technologies, I was trained on{" "}
              <span className="purple">Microsoft tools</span> and{" "}
              <span className="purple">AutoCAD</span>,
              and continuously worked on building complete, end-to-end projects during my studies.
              <br />
              <br />
              After completing this educational journey, I continued my academic and professional growth by enrolling at{" "}
              <span className="purple">ElSewedy University of Technology – Polytechnic of Egypt</span>,
              where I am further enhancing my technical and practical expertise.

          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming & Fitness 🏊‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
          <br/>   
            <p>
              <h4><span className="purple">"Soft Skills"</span></h4>
              Teamwork & Collaboration,

                Problem Solving,

                Fast Learner,

                Effective Communication,

                Time Management

            </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
