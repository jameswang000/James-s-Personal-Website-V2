import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page, PageBody, Navbar } from "./components";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page>
      <PageBody>
        <Navbar />
        <div className="bg-amber-400">Hello my friend</div>
        <div className="bg-blue-300">Greetings my dude</div>
      </PageBody>
    </Page>
  </StrictMode>
);
