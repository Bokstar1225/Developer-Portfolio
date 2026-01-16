const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React"],
  Backend: ["C#", "ASP.NET Core", "Java", "REST APIs"],
  Database: ["SQL Server", "MySQL"],
  Tools: ["Git", "GitHub", "Azure"]
};

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={grid}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={card}>
            <h3>{category}</h3>
            <ul>
              {items.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1.5rem",
  marginTop: "2rem"
};

const card = {
  background: "#020617",
  padding: "1.5rem",
  borderRadius: "8px"
};
