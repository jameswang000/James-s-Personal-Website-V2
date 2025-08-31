import type { CareerCardProps } from "../../components";

export interface CareerCardData extends CareerCardProps {
  id: string;
}

export const jobs: CareerCardData[] = [
  {
    jobTitle: "Frontend SWE Intern",
    companyName: "Klaviyo",
    dateString: "June 2025 - August 2025",
    description:
      "As an engineer on the Adoption Team, I implemented the redesign of the workflow and interface for creating and editing SMS subscribe links.",
    id: "85b91aeb-910a-4e21-9ec3-af1b8a38940e",
  },
  {
    jobTitle: "IT Intern",
    companyName: "ConocoPhillips",
    dateString: "May 2024 - July 2024",
    description:
      "As the technical specialist of the Digital Strategy Team, I developed an internal tool that retrieved the members of any functional team using data from Jira.",
    id: "8cc1f9c3-86c3-41f4-a18c-a0463ac127fc",
  },
  {
    jobTitle: "Data Analytics Intern",
    companyName: "Trying Together",
    dateString: "May 2023 - August 2023",
    description:
      "As a data analyst, I visualized the availability of pre-K resources in Pittsburgh neighborhoods based on their demographics using census data.",
    id: "f029cdb3-db15-4be2-8320-09d16246aa80",
  },
  {
    jobTitle: "Computer Science TA",
    companyName: "CMU Department of Computer Science",
    dateString: "August 2025 - Present",
    description:
      "As a TA for CMU's introductory programming class, I taught weekly recitations, guided students in 1:1 sessions, and tracked student progress.",
    id: "dc92790d-eb5a-4f15-b8bb-908086f03b1a",
  },
  {
    jobTitle: "Research Assistant",
    companyName: "CMU Relationships Lab",
    dateString: "January 2023 - May 2023",
    description:
      "As a laboratory assistant, I conducted research on affectionate touch, discovering and labeling articles on affectionate touch's link with sleep.",
    id: "b79e7d56-1d08-43b3-a10f-609cc089e56f",
  },
  {
    jobTitle: "Philosophy TA",
    companyName: "CMU Department of Philosophy",
    dateString: "August 2023 - December 2023",
    description:
      "As a TA for an introductory logic course, I moderated discussions on moral/existential philosophy and reviewed students' argument maps.",
    id: "c5a5ac27-9655-42e6-aac8-6a8828c997e5",
  },
];
