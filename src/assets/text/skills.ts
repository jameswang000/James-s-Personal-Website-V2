import type { SkillCardProps } from "../../components";
import {
  ReactIcon,
  TypescriptIcon,
  CSSIcon,
  HTMLIcon,
  PythonIcon,
  PowerBIIcon,
  AgileIcon,
  DjangoIcon,
  DatabaseIcon,
  RESTIcon,
  GitIcon,
  GitHubIcon,
  FigmaIcon,
  DSAIcon,
  DockerIcon,
  AWSIcon,
  JestIcon,
  RIcon,
  AIIcon,
  GoIcon,
} from "../svgs";

export interface SkillCardData extends SkillCardProps {
  id: string;
}

export const skills: SkillCardData[] = [
  {
    Icon: ReactIcon,
    heading: "React",
    description:
      "Able to build modular, reusable components for scalable web applications. Skilled in managing state, handling props, and integrating APIs to create responsive, user-friendly interfaces.",
    id: "1b7e34e0-5111-44af-9c1a-98fda9a8c111",
  },
  {
    Icon: TypescriptIcon,
    heading: "TypeScript",
    description:
      "Proficient in adding type safety to JavaScript projects to reduce bugs and improve maintainability. Comfortable defining interfaces, generics, and advanced typing patterns for large codebases.",
    id: "f2f0937e-97be-4c89-8453-3a9f0215f612",
  },
  {
    Icon: CSSIcon,
    heading: "CSS",
    description:
      "Capable of writing clean, responsive styles using modern CSS features like flexbox, grid, and variables. Experienced with styling frameworks and optimizing layouts for accessibility and performance.",
    id: "3d9b2234-dc1c-4951-a15f-6f90162c4c27",
  },
  {
    Icon: HTMLIcon,
    heading: "HTML",
    description:
      "Able to structure semantic, standards-compliant web pages. Familiar with accessibility practices and using HTML as a foundation for dynamic frontends.",
    id: "28e5dca1-5bc7-46c7-bebd-7e6a9442c51a",
  },
  {
    Icon: PythonIcon,
    heading: "Python",
    description:
      "Proficient in writing clear, efficient Python code for web backends, data analysis, and automation. Experienced with libraries like pandas for data work and pytest for testing.",
    id: "a0d7b4e2-83db-4b57-a0f4-21d5ec07f034",
  },
  {
    Icon: PowerBIIcon,
    heading: "PowerBI",
    description:
      "Able to create dashboards and visual reports that make complex data accessible to stakeholders. Skilled at connecting diverse data sources and modeling data for business insights.",
    id: "4cc62c20-f783-4a38-b4f5-2e927fa94947",
  },
  {
    Icon: AgileIcon,
    heading: "Agile",
    description:
      "Experienced working in iterative Agile teams using sprints, stand-ups, and retrospectives. Comfortable breaking down tasks, writing user stories, and collaborating across roles.",
    id: "94a2954e-80a6-4de4-a8f6-85d2cc02c12f",
  },
  {
    Icon: DjangoIcon,
    heading: "Django",
    description:
      "Capable of building secure and scalable web applications using Django’s MVC framework. Familiar with ORM, middleware, and integrating with REST APIs.",
    id: "67e2e1f0-b9cf-41c0-9e4c-82a1f0a4b93a",
  },
  {
    Icon: DatabaseIcon,
    heading: "Database",
    description:
      "Able to design, query, and optimize relational databases. Comfortable writing joins, subqueries, and managing schemas for production systems.",
    id: "210e5d4d-5f25-41f2-81c6-c4cf3f7a2890",
  },
  {
    Icon: RESTIcon,
    heading: "REST",
    description:
      "Capable of building and consuming RESTful services to connect frontend and backend systems. Skilled in authentication, error handling, and designing clean endpoints.",
    id: "b6f8ad7a-56b3-4d56-a243-f4b03a7a75db",
  },
  {
    Icon: GitIcon,
    heading: "Git",
    description:
      "Proficient in version control workflows including branching, merging, and pull requests. Experienced using Git to collaborate in distributed teams.",
    id: "739a40ab-5d42-42f2-8d45-99322e6c9202",
  },
  {
    Icon: GitHubIcon,
    heading: "GitHub",
    description:
      "Comfortable managing repositories, issues, and pull requests on GitHub. Experienced using GitHub Actions for CI/CD workflows.",
    id: "0d6f76e8-ef3f-46e7-81e4-9b3f1e537e81",
  },
  {
    Icon: FigmaIcon,
    heading: "Figma",
    description:
      "Able to design wireframes and prototypes that communicate UI/UX ideas clearly. Comfortable collaborating with designers and translating designs into production code.",
    id: "c5e7a4d9-2f8b-4b3c-9d1e-8f6a5b7c0d3e",
  },
  {
    Icon: DSAIcon,
    heading: "DSA",
    description:
      "Strong foundation in data structures and algorithms, including arrays, trees, graphs, and sorting/searching techniques. Able to apply them to optimize solutions and reason about time/space complexity.",
    id: "b2a1c6d8-4e5f-9a7b-8c9d-0e1f2a3b4c5d",
  },
  {
    Icon: DockerIcon,
    heading: "Docker",
    description:
      "Experienced containerizing applications for consistent environments across development and production. Able to write Dockerfiles, use Docker Compose, and manage images.",
    id: "f3e2d1c0-b9a8-7c6d-5e4f-3b2a1c0d9e8f",
  },
  {
    Icon: AWSIcon,
    heading: "AWS",
    description:
      "Familiar with deploying and managing services on AWS, particularly EC2 and S3. Able to configure environments and leverage cloud infrastructure for scalability.",
    id: "a9b8c7d6-e5f4-3d2e-1c0b-9a8b7c6d5e4f",
  },
  {
    Icon: JestIcon,
    heading: "Jest",
    description:
      "Capable of writing unit and integration tests for JavaScript/TypeScript projects. Skilled in test-driven development and mocking dependencies.",
    id: "d4c3b2a1-0f9e-8d7c-6b5a-4e3d2c1b0a9f",
  },
  {
    Icon: RIcon,
    heading: "R",
    description:
      "Proficient in statistical programming and data visualization using R. Able to perform exploratory data analysis and create reports with R Markdown.",
    id: "e5d4c3b2-a1f0-9e8d-7c6b-5a4e3d2c1b0a",
  },
  {
    Icon: AIIcon,
    heading: "AI",
    description:
      "Knowledgeable about the impact of AI tools on modern software development. Comfortable experimenting with AI APIs and integrating them into workflows or projects.",
    id: "b1a0c9d8-e7f6-5d4c-3b2a-1e0d9c8b7a6f",
  },
  {
    Icon: GoIcon,
    heading: "Go",
    description:
      "Able to write performant, concurrent code using Go routines and channels. Familiar with building distributed systems and simple APIs with Go.",
    id: "c8b7a6d5-e4f3-2d1c-0b9a-8e7f6d5c4b3a",
  },
];
