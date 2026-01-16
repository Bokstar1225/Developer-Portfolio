export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Bokang</h2>
      <div style={styles.links}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    position: "sticky",
    top: 0,
    background: "#020617",
    zIndex: 100
  },
  links: {
    display: "flex",
    gap: "1.5rem"
  }
};
