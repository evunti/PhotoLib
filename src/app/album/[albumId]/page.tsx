import { client } from "@/sanity/lib/client";
import { PhotoGrid } from "@/components/PhotoGrid";
import Link from "next/link";

const albumQuery = `*[_type == "photoAlbum" && _id == $albumId][0]{title, description, photos}`;

type AlbumPageProps = { params: Promise<{ albumId: string }> };

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { albumId } = await params;

  const album = await client.fetch(albumQuery, { albumId: albumId });
  if (!album) return <main style={{ padding: 32 }}>Album not found.</main>;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          color: "#0070f3",
          textDecoration: "none",
          marginBottom: 32,
          fontWeight: 500,
          fontSize: 16,
          letterSpacing: 0.2,
          opacity: 0.8,
          transition: "opacity 0.2s",
        }}
      >
        ← Back to Albums
      </Link>
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          color: "#18181b",
          textAlign: "center",
          letterSpacing: "-0.01em",
        }}
      >
        {album.title}
      </h1>
      {album.description && (
        <p
          style={{
            color: "#666",
            marginBottom: "2.5rem",
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          {album.description}
        </p>
      )}
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
