"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function AlbumNavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        width: "100vw",
        maxWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
        position: "relative",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <div style={{ flex: 1 }}></div>
      <Link href="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 20,
            color: "#444",
            flex: 0,
            textAlign: "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
          }}
        >
          Evunti
        </div>
      </Link>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          gap: "24px",
          maxWidth: "320px",
        }}
      >
        {isMobile ? (
          <>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "32px",
                height: "32px",
              }}
              aria-label="Open menu"
            >
              <span
                style={{
                  width: "24px",
                  height: "3px",
                  background: "#444",
                  marginBottom: "5px",
                  borderRadius: "2px",
                }}
              ></span>
              <span
                style={{
                  width: "24px",
                  height: "3px",
                  background: "#444",
                  marginBottom: "5px",
                  borderRadius: "2px",
                }}
              ></span>
              <span
                style={{
                  width: "24px",
                  height: "3px",
                  background: "#444",
                  borderRadius: "2px",
                }}
              ></span>
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "48px",
                  right: 0,
                  background: "#f8fafc",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 12px rgba(34,34,34,0.10)",
                  zIndex: 10,
                  minWidth: "90px",
                  borderRadius: "0.3rem",
                  overflow: "hidden",
                  padding: 0,
                }}
              >
                <Link
                  href="/about"
                  style={{
                    display: "block",
                    padding: "10px 14px",
                    textDecoration: "none",
                    color: "#444",
                    background: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "15px",
                    borderBottom: "1px solid #e5e7eb",
                    transition: "background 0.2s, color 0.2s",
                    textAlign: "left",
                  }}
                  onClick={() => setDropdownOpen(false)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#e5e7eb")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#f8fafc")
                  }
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  style={{
                    display: "block",
                    padding: "10px 14px",
                    textDecoration: "none",
                    color: "#444",
                    background: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "15px",
                    transition: "background 0.2s, color 0.2s",
                    textAlign: "left",
                  }}
                  onClick={() => setDropdownOpen(false)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#e5e7eb")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#f8fafc")
                  }
                >
                  Gallery
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <Link
              href="/about"
              style={{
                color: "#444444",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              About
            </Link>
            <Link
              href="/gallery"
              style={{
                color: "#444444",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Gallery
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
