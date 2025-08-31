import type { ExternalLinkCardProps } from "../../components/forms/ExternalLinkCard";
// import { CameraIcon } from "../svgs/CameraIcon";
import { EmailIcon } from "../svgs/EmailIcon";
import { GitHubIcon } from "../svgs/GitHubIcon";
import { LinkedInIcon } from "../svgs/LinkedInIcon";

export interface ExternalLinkCardData extends ExternalLinkCardProps {
  id: string;
}

export const externalLinks: ExternalLinkCardData[] = [
  {
    Icon: GitHubIcon,
    heading: "GitHub",
    description: "Visit my GitHub to see the awesome code I've written!",
    id: "b82c07a9-f12c-4c30-a68b-7928080396b8",
    url: "https://github.com/jameswang000",
  },
  {
    Icon: LinkedInIcon,
    heading: "LinkedIn",
    description: "Explore my entire career history and join my network.",
    id: "8a9d2380-84f2-48fc-9ab0-2360b8c859fa",
    url: "https://www.linkedin.com/in/james-wang0/",
  },
  {
    Icon: EmailIcon,
    heading: "Email",
    description: "Send an email to me directly at jmaeswnag@gmail.com.",
    id: "50542519-934b-446d-a896-5e327443d235",
    url: "mailto:jmaeswnag@gmail.com",
  },
  // {
  //   Icon: CameraIcon,
  //   heading: "Photography Gallery",
  //   description: "Take a look at some of the photos I take in my free time.",
  //   id: "2b9d8383-1afc-4013-8ff7-2f6e454b6648",
  //   url: ""
  // },
];
