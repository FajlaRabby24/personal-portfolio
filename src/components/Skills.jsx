import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css.png";
import express from "../assets/images/express.png";
import figma from "../assets/images/figma.png";
import firebase from "../assets/images/firebase.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import jwt from "../assets/images/jwt.png";
import mongodb from "../assets/images/mongodb.png";
import mui from "../assets/images/mui.png";
import nodejs from "../assets/images/nodejs.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import vscode from "../assets/images/vscode.png";
import Container from "./Container";

const skills = [
  { image: bootstrap, name: "Bootstrap" },
  { image: css, name: "CSS" },
  { image: express, name: "Express" },
  { image: figma, name: "Figma" },
  { image: firebase, name: "Firebase" },
  { image: git, name: "Git" },
  { image: github, name: "Github" },
  { image: html, name: "HTML" },
  { image: js, name: "JavaScript" },
  { image: mongodb, name: "Mongodb" },
  { image: mui, name: "Material UI" },
  { image: nodejs, name: "Node" },
  { image: react, name: "React" },
  { image: tailwind, name: "Tailwind" },
  { image: vscode, name: "Vs Code" },
  { image: jwt, name: "JWT" },
];

const Skills = () => {
  return (
    <Container>
      <section id="skills" className="pb-20 scroll-mt-20">
        <h1 className="section-title">Skills</h1>
        <div className="grid grid-cols-8  items-center gap-3">
          {skills.map((skill, idx) => (
            <div key={idx} className="text-center  ">
              <img
                className="min-h-[96px] max-h-[96px] mx-auto"
                src={skill.image}
                alt={`${skill.name}.png`}
              />
              <h3 className="text-white mt-3">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Skills;
