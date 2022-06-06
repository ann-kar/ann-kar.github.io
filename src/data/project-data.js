const lastProject = {
  name: "Set",
  technologies: ["TypeScript", "React", "SASS", "SVG"],
  description:
    "My online version of the SET card game, following the original logic & timed, with cards dynamically generated from a predefined set of symbols.",
  demo: "https://ann-kar.github.io/set/",
  code: "https://github.com/ann-kar/set",
  label: "last project",
};

const projects = [
  {
    id: "1",
    name: "Bike, run, swim",
    technologies: [
      "TypeScript",
      "Next.js",
      "react-hook-form",
      "class-validator",
      "Tailwind",
    ],
    description:
      "A training app for triathlonists. Allows to add workouts, display them as a list, and edit data.",
    demo: "https://bike-run-swim.herokuapp.com",
    code: "https://github.com/ann-kar/bikerunswim",
    label: "recent project",
  },
  {
    id: "2",
    name: "Game of life",
    technologies: ["TypeScript", "Next.js", "Jest (TDD)", "npm", "Tailwind"],
    description:
      "Visualization of Conway's Game of Life algorithm. A pair project using monorepo.",
    demo: "https://game-of-life-vis.herokuapp.com",
    code: "https://github.com/ann-kar/monorepo-game-of-life",
    label: "recent project",
  },
  {
    id: "3",
    name: "Rick and Morty",
    technologies: ["TypeScript", "Next.js", "react-query", "Tailwind"],
    description:
      "A tribute to the Rick and Morty show - an app for searching specific characters by name or other parameters.",
    demo: "https://rick-morty-dun.vercel.app",
    code: "https://github.com/ann-kar/rick-morty",
    label: "recent project",
  },
  {
    id: "4",
    name: "Shift planner",
    technologies: ["Node.js (Express)", "EJS", "PostgreSQL", "Bootstrap"],
    description:
      "An employee scheduling app built with Node.js as an exercise in server-side JS, fetching from the database, and data presentation (calendar on the homepage).",
    demo: null,
    code: "https://github.com/ann-kar/shift-planner",
    label: "older project",
  },
  {
    id: "5",
    name: "Calculator",
    technologies: ["JavaScript (ES6)", "Jest", "webpack", "babel", "ESLint"],
    description:
      "A JavaScript app handling basic calculator functions (addition, subtraction, multiplication, division), complete with ten test suites written in Jest.",
    demo: null,
    code: "https://github.com/ann-kar/calculator",
    label: "older project",
  },
  {
    id: "6",
    name: "Accordion FAQ",
    technologies: ["TypeScript", "React", "styled-components"],
    description:
      "A small project intended as an exercise in styled-components and TypeScript, based on a Figma design. A responsive landing page displaying FAQ and an SVG graphic.",
    demo: "https://ann-kar.github.io/accordion-faq/",
    code: "https://github.com/ann-kar/accordion-faq/",
    label: "small project",
  },
];

export { lastProject, projects };
