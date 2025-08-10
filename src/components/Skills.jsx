import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css.png";
import express from "../assets/images/express.png";
import figma from "../assets/images/figma.png";
import firebase from "../assets/images/firebase.png";
import framer from "../assets/images/framer.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import jwt from "../assets/images/jwt.png";
import mongodb from "../assets/images/mongodb.png";
import mui from "../assets/images/mui.png";
import nodejs from "../assets/images/nodejs.png";
import postman from "../assets/images/postman.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import stripe from "../assets/images/stripe.png";
import tailwind from "../assets/images/tailwind.png";
import tanstack from "../assets/images/tanstack.png";
import typescript from "../assets/images/typeScript.png";
import vscode from "../assets/images/vscode.png";
import Container from "./Container";

const skillCategories = {
  "Programming Languages": [
    { image: js, name: "JavaScript" },
    { image: typescript, name: "TypeScript" },
  ],
  Frontend: [
    { image: html, name: "HTML" },
    { image: css, name: "CSS" },
    { image: bootstrap, name: "Bootstrap" },
    { image: tailwind, name: "Tailwind CSS" },
    { image: mui, name: "Material UI" },
    { image: react, name: "React" },
    { image: redux, name: "Redux Toolkit" },
    { image: tanstack, name: "TanStack Query" },
    { image: framer, name: "Framer Motion" },
  ],
  Backend: [
    { image: nodejs, name: "Node.js" },
    { image: express, name: "Express.js" },
    { image: mongodb, name: "MongoDB" },
    { image: jwt, name: "JWT" },
    { image: firebase, name: "Firebase" },
    { image: stripe, name: "Stripe" },
  ],
  Tools: [
    { image: git, name: "Git" },
    { image: github, name: "GitHub" },
    { image: vscode, name: "VS Code" },
    { image: postman, name: "Postman" },
    { image: figma, name: "Figma" },
  ],
};

const Skills = () => {
  return (
    <Container>
      <section id="skills" className="px-3 xl:px-0 scroll-mt-24">
        <h1 className="section-title text-center mb-10">Skills</h1>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              {category}
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/40 rounded-xl p-5 w-[120px] flex flex-col items-center shadow-md 
                             transition-all duration-300 hover:shadow-lg hover:bg-gray-800 hover:scale-105"
                >
                  <img
                    className="min-h-[60px] max-h-[60px] object-contain"
                    src={skill.image}
                    alt={skill.name}
                  />
                  <h3 className="text-white mt-3 text-sm font-medium text-center">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Skills;
