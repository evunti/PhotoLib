"use client";
import { client } from "@/sanity/lib/client";
import { PhotoGrid } from "@/components/PhotoGrid";
import Link from "next/link";
import { useState, useEffect } from "react";

const albumQuery = `*[_type == "photoAlbum" && _id == $albumId][0]{title, description, photos}`;

type AlbumPageProps = { params: Promise<{ albumId: string }> };

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { albumId } = await params;
  const album = await client.fetch(albumQuery, { albumId: albumId });
  if (!album) return <main style={{ padding: "16px" }}>Album not found.</main>;

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
    <main
      style={{
        minHeight: "100vh",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Responsive Navbar */}
      <nav
        style={{
          width: "100%",
          maxWidth: "90vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
          position: "relative",
        }}
      >
        <div style={{ flex: 1 }}></div>
        <div
          style={{
            fontWeight: 700,
            fontSize: 20,
            color: "#444",
            flex: 0,
            textAlign: "center",
          }}
        >
          Evunti
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          {isMobile && (
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
          )}
          {isMobile && dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "48px",
                right: 0,
                background: "white",
                border: "1px solid #ddd",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                zIndex: 10,
                minWidth: "120px",
              }}
            >
              <Link
                href="/about"
                style={{
                  display: "block",
                  padding: "12px 20px",
                  textDecoration: "none",
                  color: "#0070f3",
                  borderBottom: "1px solid #eee",
                  fontWeight: 500,
                }}
                onClick={() => setDropdownOpen(false)}
              >
                About
              </Link>
              <Link
                href="/gallery"
                style={{
                  display: "block",
                  padding: "12px 20px",
                  textDecoration: "none",
                  color: "#0070f3",
                  fontWeight: 500,
                }}
                onClick={() => setDropdownOpen(false)}
              >
                Gallery
              </Link>
            </div>
          )}
        </div>
      </nav>
      <PhotoGrid photos={album.photos} />
    </main>
  );
}

export async function generateStaticParams() {
  const albums = await client.fetch(`*[_type == "photoAlbum"]{_id}`);
  return albums.map((album: { _id: string }) => ({
    albumId: album._id,
  }));
}
