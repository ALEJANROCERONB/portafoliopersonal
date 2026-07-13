import { useState } from "react";
import Footer from "../components/Footer";
import ProjectGrid from "../components/ProjectGrid";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";
import "../styles/Work.css";

export default function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="work-page">
      <h2 className="work-heading">My Work</h2>
      <p className="work-subheading">
        A selection of web and mobile projects. Tap a card to see the full
        details.
      </p>

      <ProjectGrid projects={projects} onSelect={setSelected} />

      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      <Footer />
    </div>
  );
}
