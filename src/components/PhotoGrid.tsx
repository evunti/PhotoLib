import { urlFor } from "@/sanity/lib/image";

interface Photo {
  asset?: { _ref?: string };
  alt?: string;
  [key: string]: unknown;
}

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2px",
        maxWidth: 1000,
        justifyItems: "center",
      }}
    >
      {photos?.map((photo, idx: number) => {
        if (!photo?.asset?._ref) return null;
        return (
          <img
            key={idx}
            src={urlFor(photo).width(800).height(800).fit("crop").dpr(2).url()}
            alt={photo.alt || "Photo"}
            width={400}
            height={400}
            style={{
              borderRadius: 0,
              objectFit: "cover",
              background: "#f4f4f5",
              boxShadow: "none",
              display: "block",
              margin: 0,
            }}
          />
        );
      })}
    </div>
  );
}
