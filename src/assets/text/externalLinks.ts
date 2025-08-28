import type { ExternalLinkCardProps } from "../../components/forms/ExternalLinkCard";
import { CameraIcon } from "../svgs/CameraIcon";
import { EmailIcon } from "../svgs/EmailIcon";
import { GitHubIcon } from "../svgs/GitHubIcon";
import { LinkedInIcon } from "../svgs/LinkedInIcon";

export const externalLinks: ExternalLinkCardProps[] = [
  {
    Icon: GitHubIcon,
    heading: "GitHub",
    description: "Visit my GitHub to see the awesome code I've written!",
  },
  {
    Icon: LinkedInIcon,
    heading: "LinkedIn",
    description: "Explore my entire career history and join my network.",
  },
  {
    Icon: EmailIcon,
    heading: "Email",
    description: "Send an email to me directly at jmaeswnag@gmail.com.",
  },
  {
    Icon: CameraIcon,
    heading: "Photography Gallery",
    description: "Take a look at some of the photos I take in my free time.",
  },
];
