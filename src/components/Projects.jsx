import AnimatedSection from "./AnimatedSection";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <AnimatedSection>
        <h2>Projects</h2>
        <div style={grid}>
          {projects.map(project => (
            <div key={project.title} style={card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech.join(" • ")}</small>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  marginTop: "2rem"
};

const card = {
  background: "#020617",
  padding: "1.5rem",
  borderRadius: "8px"
};
