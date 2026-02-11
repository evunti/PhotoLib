"use client";

export default function AboutPage() {
  return (
    <main className="p-8 pb-16 flex flex-col items-center justify-start pt-16 bg-[#f8fafc]">
      {/* <h1
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "1.5rem",
          color: "#222",
          textAlign: "center",
        }}
      >
        About
      </h1> */}

      <div
        className="w-full max-w-6xl h-[600px] text-[#444] text-lg text-center bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/profile.jpg')",
        }}
      >
        <div className="text-white mb-4 w-full">
          <p>
            Welcome to my website! Among these pages, you will find a collection
            of my photos, organized into albums, as well as some projects
            I&apos;ve done. This website was built with Next.js and Sanity.
          </p>
        </div>
      </div>
      {/* <Image
        src="/images/profile.jpg"
        alt="Instagram profile photo"
        width={1500}
        height={1200}
        style={{
          margin: "16px 0",
          opacity: 1,
          objectFit: "cover",
          textAlign: "center",
        }}
      /> */}
    </main>
  );
}
