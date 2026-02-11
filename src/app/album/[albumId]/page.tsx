import { client } from "@/sanity/lib/client";
import { PhotoGrid } from "@/components/PhotoGrid";
import Link from "next/link";

const albumQuery = `*[_type == "photoAlbum" && _id == $albumId][0]{title, description, photos}`;

type AlbumPageProps = { params: Promise<{ albumId: string }> };

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { albumId } = await params;
  const album = await client.fetch(albumQuery, { albumId: albumId });
  if (!album) return <main style={{ padding: "16px" }}>Album not found.</main>;
  return (
    <main
      style={{
        padding: "1rem 1rem 3rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <Link
            href="/gallery"
            style={{
              color: "#666",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            ← Back
          </Link>
          <h1
            style={{
              fontWeight: 700,
              fontSize: 20,
              color: "#444",
              textAlign: "center",
              margin: 0,
            }}
          >
            {album.title}
          </h1>
          <div style={{ width: "60px" }}></div>
        </div>
        <PhotoGrid photos={album.photos} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const albums = await client.fetch(`*[_type == "photoAlbum"]{_id}`);
  return albums.map((album: { _id: string }) => ({
    albumId: album._id,
  }));
}
