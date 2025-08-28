import { client } from "@/sanity/lib/client";
import { PhotoGrid } from "@/components/PhotoGrid";

const albumQuery = `*[_type == "photoAlbum" && _id == $albumId][0]{title, description, photos}`;

type AlbumPageProps = { params: Promise<{ albumId: string }> };

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { albumId } = await params;
  const album = await client.fetch(albumQuery, { albumId: albumId });
  if (!album) return <main style={{ padding: "16px" }}>Album not found.</main>;

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
      <h1
        style={{
          fontWeight: 700,
          fontSize: 20,
          color: "#444",
          textAlign: "center",
          margin: "24px 0 8px 0",
          width: "100%",
          maxWidth: "90vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Photo Albums
      </h1>
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
