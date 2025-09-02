import { type ProjectCardProps } from "../../components";
import { DSAIcon } from "../svgs";

export interface ProjectCardData extends ProjectCardProps {
  id: string;
}

export const projects: ProjectCardData[] = [
  {
    id: "8a7d2b2f-94c5-4f84-9d8f-8b61b4a3a0a1",
    Icon: DSAIcon,
    heading: "E-commerce Site",
    description:
      "Developed Fronda, a mock single-page e-commerce frontend for selling houseplants using React, TypeScript, and Tailwind CSS. I designed the full UI and interaction flow in Figma and implemented it step-by-step—translating prototypes into reusable React components, managing app state for product listings and a local-storage shopping cart, and iterating on responsive layouts, accessibility, and micro-interactions for a polished user experience. This project highlights my ability to move from visual design to production code, build component-driven architectures, and refine UX through iterative implementation.",
    badges: ["Completed"],
    url: "https://jameswang000.github.io/Fronda/",
  },
  {
    id: "b3dff3ab-41bb-4955-bdd0-9ac2a33f9b34",
    Icon: DSAIcon,
    heading: "Desktop Sudoku App",
    description:
      "Cactus Sudoku, a 933-line Python desktop app built with cmu_graphics, featuring interactive Sudoku boards across multiple difficulty levels. Implemented an efficient backtracking solver with advanced hint generation, real-time validation, and responsive UI elements to enhance gameplay. Demonstrated strengths in algorithm design, event-driven programming, and building user-friendly desktop applications.",
    badges: ["Completed"],
    url: "https://github.com/jameswang000/Sudoku",
  },
  {
    id: "c32b6ac2-3edc-4700-81ae-0f64f11d349e",
    Icon: DSAIcon,
    heading: "Digital Birthday Card",
    description:
      "Digital Birthday Card is a playful digital greeting built entirely with vanilla HTML, CSS, and JavaScript, without relying on higher-level frameworks. The project highlights mastery of core web fundamentals, including responsive layout design, interactive button handling, and CSS-based animations that bring pages and celebratory effects to life. By creating an engaging, animated card experience from scratch, this project demonstrates strong control over raw web technologies and creative problem solving at the foundational level.",
    badges: ["Completed"],
    url: "https://jameswang000.github.io/Birthday-Card/",
  },
  {
    id: "d8943f1a-8a8e-497f-977f-7d58ebcb0b1f",
    Icon: DSAIcon,
    heading: "Malloc Dynamic Memory Allocator",
    description:
      "Completed malloc lab, a full-featured dynamic memory allocator in C, including malloc, free, realloc, and calloc, focusing on low-level memory management, pointer arithmetic, and heap consistency. Completed the project a week ahead of most classmates, earning a perfect score while ensuring correctness and efficiency across all driver tests. Since this is a CMU project, please contact me directly if you want to see my work (code) for this project.",
    badges: ["Completed"],
    url: "https://www.cs.cmu.edu/~213/",
  },
  {
    id: "e1a74a8a-1929-4f54-87b5-bff0cb10f1ce",
    Icon: DSAIcon,
    heading: "Language Learning Graphical Report",
    description:
      "Language Learning Graphical Report is a comprehensive R Markdown analysis exploring how linguistic and personal backgrounds impact proficiency in Dutch as a second language. Using a dataset of over 50,000 learners, the project applies the scientific method to investigate key research questions about first-language effects, educational experience, and multilingual exposure. I performed data wrangling in R, implemented statistical comparisons, and created clear, interpretable visualizations with ggplot2 to reveal trends in language acquisition. This project demonstrates competency in data-driven research, reproducible reporting, and communicating insights through code-backed graphical analysis.",
    badges: ["Completed"],
    url: "https://www.stat.cmu.edu/capstoneresearch/fall2023/315files_f23/team24.html",
  },
  {
    id: "f43b318d-77ef-4d74-8f6f-1d9fdc36e98a",
    Icon: DSAIcon,
    heading: "Named Entity Recognition RNN",
    description:
      "Implemented an end-to-end RNN in Python using PyTorch primitives to perform sequence tagging on the CoNLL 2003 dataset. Built a custom dataset loader, activation functions, and RNN architecture from scratch, leveraging autograd for training. Validated the model using accuracy and F1-score, demonstrating strong conceptual and practical understanding of deep learning and sequence modeling. Since this is a CMU course project, please contact me to see my work (code) on this project.",
    badges: ["Completed"],
    url: "https://www.cs.cmu.edu/~mgormley/courses/10601/coursework.html",
  },
  {
    id: "0a8b1e3f-1cd3-496a-92a1-78585c8f4a42",
    Icon: DSAIcon,
    heading: "This Personal Website!",
    description:
      "This website you're viewing now highlights my personality, work experience, and skills in a clean, responsive format. Built with reusable React components and an organized project directory, it's structured for easy extension and maintenance as I advance in my career. I incorporated SVGs and modular assets to enhance interactivity and visual clarity, while responsive design ensures a smooth experience across devices. The layout balances aesthetics with functionality, reflecting both thoughtful engineering and deliberate design.",
    badges: ["Completed"],
    url: ``,
  },
];
