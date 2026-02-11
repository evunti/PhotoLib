export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-start pt-16">
      <div
        className="w-full max-w-6xl h-[600px] text-[#444] text-lg text-center bg-cover bg-center bg-no-repeat flex items-center justify-center mx-auto"
        style={{
          backgroundImage: "url('/images/profile.jpg')",
        }}
      >
        <div className="rounded-2xl py-8 px-6 w-full max-w-[600px] mx-auto mb-[17rem]">
          <p>
            Welcome to my website! Among these pages, you will find a collection
            of my photos, organized into albums, as well as some projects
            I&apos;ve done. This website was built with Next.js and Sanity.
          </p>
        </div>
      </div>
    </main>
  );
}
