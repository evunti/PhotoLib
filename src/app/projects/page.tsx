"use client";

export default function ProjectsPage() {
  const projects = [
    {
      title: "GLR Solution",
      description: "Freelance",
      url: "https://glr-solution.com/",
      image: "/images/glr.png",
    },
    {
      title: "Archetype Compass",
      description: "Personal",
      url: "https://arch-compass-liart.vercel.app/",
      image: "/images/arch.png",
    },
  ];

  return (
    <main
      style={{
        background: "#f8fafc",
        padding: "3rem 2rem 4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
          color: "#1a1a1a",
          textAlign: "center",
        }}
      >
        Projects
      </h1>
      <p
        style={{
          color: "#666",
          fontSize: "1.1rem",
          textAlign: "center",
          margin: "0 0 3rem 0",
          maxWidth: 600,
        }}
      >
        Websites I&apos;ve built
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1000,
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
              width: "100%",
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
              background: "#fff",
              borderRadius: "0",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "1px solid #e5e7eb",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            {project.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "contain",
                  backgroundColor: "#fafafa",
                  padding: "1.5rem",
                  borderBottom: "1px solid #e5e7eb",
                }}
              />
            )}
            <div style={{ padding: "1.75rem 2rem", width: "100%" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  margin: "0 0 0.5rem 0",
                  color: "#1a1a1a",
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#888",
                  margin: "0 0 1rem 0",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
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
                View Project →
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
