import Link from "next/link";
import "@/app/globals.css";
import { AlbumNavBar } from "@/components/AlbumNavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AlbumNavBar />
        {children}
        <footer
          style={{
            width: "100%",
            textAlign: "center",
            padding: "1rem 0",
            color: "#888",
            fontSize: 15,
            background: "#f8fafc",
          }}
        >
          &copy; {new Date().getFullYear()} Evunti Photography |
          <a
            href="https://instagram.com/zhenya.untilova"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#405de6", textDecoration: "none", marginLeft: 6 }}
          >
            Instagram
          </a>
        </footer>
      </body>
    </html>
  );
}
