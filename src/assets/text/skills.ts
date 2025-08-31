import type { SkillCardProps } from "../../components";
import { JSIcon, ReactIcon } from "../svgs";
import { TypescriptIcon } from "../svgs/TypescriptIcon";

export interface SkillCardData extends SkillCardProps {
  id: string;
}

export const skills: SkillCardData[] = [
  {
    Icon: ReactIcon,
    heading: "React",
    description: "React Description",
    id: "1b7e34e0-5111-44af-9c1a-98fda9a8c111",
  },
  {
    Icon: TypescriptIcon,
    heading: "Typescript",
    description: "Javascript Description",
    id: "f2f0937e-97be-4c89-8453-3a9f0215f612",
  },
  {
    Icon: ReactIcon,
    heading: "React",
    description: "React Description",
    id: "3d9b2234-dc1c-4951-a15f-6f90162c4c27",
  },
  {
    Icon: JSIcon,
    heading: "Javascript",
    description: "Javascript Description",
    id: "28e5dca1-5bc7-46c7-bebd-7e6a9442c51a",
  },
  {
    Icon: ReactIcon,
    heading: "React",
    description: "React Description",
    id: "a0d7b4e2-83db-4b57-a0f4-21d5ec07f034",
  },
  {
    Icon: JSIcon,
    heading: "Javascript",
    description: "Javascript Description",
    id: "4cc62c20-f783-4a38-b4f5-2e927fa94947",
  },
  {
    Icon: ReactIcon,
    heading: "React",
    description: "React Description",
    id: "94a2954e-80a6-4de4-a8f6-85d2cc02c12f",
  },
  {
    Icon: JSIcon,
    heading: "Javascript",
    description: "Javascript Description",
    id: "67e2e1f0-b9cf-41c0-9e4c-82a1f0a4b93a",
  },
  {
    Icon: ReactIcon,
    heading: "React",
    description: "React Description",
    id: "210e5d4d-5f25-41f2-81c6-c4cf3f7a2890",
  },
  {
    Icon: JSIcon,
    heading: "Javascript",
    description: "Javascript Description",
    id: "b6f8ad7a-56b3-4d56-a243-f4b03a7a75db",
  },
  {
    Icon: ReactIcon,
    heading: "React",
    description: "React Description",
    id: "739a40ab-5d42-42f2-8d45-99322e6c9202",
  },
  {
    Icon: JSIcon,
    heading: "Javascript",
    description: "Javascript Description",
    id: "0d6f76e8-ef3f-46e7-81e4-9b3f1e537e81",
  },
];
