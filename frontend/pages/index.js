export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="flex justify-between p-6">
        <h1 className="text-xl font-bold">ClipForge AI</h1>
        <a href="/pricing" className="bg-white text-black px-4 py-2 rounded">
          Get Started
        </a>
      </nav>

      <section className="text-center mt-32">
        <h2 className="text-5xl font-extrabold">
          Turn Long Videos Into Viral Shorts
        </h2>
        <p className="text-gray-400 mt-6">
          AI finds highlights, adds captions, and creates shorts automatically.
        </p>
      </section>
    </div>
  );
}
