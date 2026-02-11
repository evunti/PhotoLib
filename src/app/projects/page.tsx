"use client";

export default function ProjectsPage() {
  const projects = [
    {
      title: "GLR Solution",
      description: "Freelance",
      url: "https://glr-solution.com/",
      image: "/images/glr.png", // You can add project images here
    },
    {
      title: "Arch Compass",
      description: "Personal",
      url: "https://arch-compass-liart.vercel.app/",
      image: "/images/arch.png", // You can add project images here
    },
  ];

  return (
    <main
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "1.2rem",
          color: "#222",
          textAlign: "center",
        }}
      >
        Projects
      </h1>
      <p
        style={{
          color: "#444",
          fontSize: 18,
          textAlign: "center",
          margin: "0 0 2rem 0",
          maxWidth: 700,
        }}
      >
        A collection of websites I've built. Click to visit them.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              minWidth: 260,
              maxWidth: 320,
              flex: "1 1 260px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "box-shadow 0.2s",
              cursor: "pointer",
              background: "#fff",
              borderRadius: "0.5rem",
              padding: "1.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                margin: 0,
                color: "#333",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                textAlign: "center",
                margin: "0.5rem 0 1rem 0",
              }}
            >
              {project.description}
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#405de6",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Visit →
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
