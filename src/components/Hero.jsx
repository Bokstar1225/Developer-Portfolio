export default function Hero() {
  return (
    <section>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Full-Stack Developer
      </h1>
      <p style={{ maxWidth: "600px", marginTop: "1rem" }}>
        I build secure, scalable web applications using
        ASP.NET Core, React, and SQL.
      </p>
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a href="#projects" style={buttonStyle}>View Projects</a>
        <a href="https://github.com/yourusername" style={outlineButton}>GitHub</a>
      </div>
    </section>
  );
}

const buttonStyle = {
  padding: "0.75rem 1.5rem",
  background: "#38bdf8",
  color: "#020617",
  borderRadius: "6px"
};

const outlineButton = {
  ...buttonStyle,
  background: "transparent",
  border: "1px solid #38bdf8",
  color: "#38bdf8"
};
