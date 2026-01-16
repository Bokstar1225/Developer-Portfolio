import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <h2 style={{marginLeft: 60, fontSize: 29}}>Bokang Tebjani</h2>

      <button onClick={() => setOpen(!open)} style={styles.menuBtn}>
        ☰
      </button>

      <div
        style={{
          ...styles.links,
          ...(open ? styles.mobileMenu : {})
        }}
      >
        {["about", "skills", "projects", "contact"].map(link => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setOpen(false)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    position: "sticky",
    top: 0,
    background: "#0f172a",
    zIndex: 100
  },
  menuBtn: {
    fontSize: "1.5rem",
    background: "none",
    color: "#e5e7eb",
    border: "none",
    display: "none",
    cursor: "pointer"
  },
  links: {
    display: "flex",
    gap: "1.5rem",
    marginRight: 60,
    fontSize: 19
  },
  mobileMenu: {
    position: "absolute",
    top: "64px",
    right: "0",
    flexDirection: "column",
    background: "#020617",
    width: "100%",
    padding: "1.5rem"
  }
};

/* Mobile */
if (window.innerWidth < 768) {
  styles.menuBtn.display = "block";
  styles.links.display = "none";
}
