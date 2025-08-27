import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Page,
  PageBody,
  Navbar,
  Hero,
  About,
  WorkExperience,
} from "./components";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page>
      <PageBody>
        <Navbar />
        <Hero />
        <About />
        <WorkExperience />
      </PageBody>
    </Page>
  </StrictMode>
);
