import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about">
      <AnimatedSection>
        <h2>About Me</h2>
        <p style={{ maxWidth: "700px", marginTop: "1rem" }}>
          I’m a Software Developer with a strong interest in backend systems,
          FinTech-style applications, and scalable architectures.
          I enjoy turning complex requirements into clean, maintainable solutions.
        </p>
      </AnimatedSection>
    </section>
  );
}
