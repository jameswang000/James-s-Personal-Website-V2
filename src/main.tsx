import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Page,
  PageBody,
  Navbar,
  Hero,
  About,
  WorkExperience,
  Projects,
  Forms,
  Footer,
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
        <Projects />
        <Forms />
        <Footer />
      </PageBody>
    </Page>
  </StrictMode>
);
