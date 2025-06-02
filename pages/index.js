// Upgraded Rabbithole Site: Cyberpunk Anime Aesthetic

import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      <Head>
        <title>Rabbithole Entertainment</title>
        <meta name="description" content="Welcome to the official gallery and store of Bowdy's creative universe." />
      </Head>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-6 bg-zinc-950 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-purple-400 tracking-wide">Rabbithole</h1>
        <ul className="flex space-x-8 text-sm">
          <li className="hover:text-purple-300 cursor-pointer transition">Home</li>
          <li className="hover:text-purple-300 cursor-pointer transition">Gallery</li>
          <li className="hover:text-purple-300 cursor-pointer transition">Shop</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-zinc-900 to-zinc-800">
        <h2 className="text-4xl md:text-6xl font-extrabold text-purple-300 drop-shadow-lg animate-pulse">Welcome to the Universe</h2>
        <p className="mt-4 text-zinc-300 max-w-xl mx-auto">Explore the digital dimension of prints, art, and storytelling where cyberpunk meets anime-inspired elegance.</p>
      </section>

      {/* Gallery Section */}
      <section className="px-8 py-16">
        <h3 className="text-3xl font-semibold text-purple-400 mb-6">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((id) => (
            <div key={id} className="bg-zinc-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <div className="bg-zinc-700 h-48 w-full rounded mb-4 animate-pulse"></div>
              <h4 className="text-lg text-purple-200 font-medium">Artwork #{id}</h4>
              <p className="text-zinc-400 text-sm">Coming Soon</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop Section */}
      <section className="px-8 py-16 bg-zinc-950">
        <h3 className="text-3xl font-semibold text-purple-400 mb-6">Shop</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3].map((id) => (
            <div key={id} className="border border-purple-500 bg-zinc-900 p-6 rounded-xl hover:shadow-purple-500/40 shadow-xl transition">
              <div className="bg-zinc-700 h-40 w-full mb-4 rounded animate-pulse"></div>
              <h4 className="text-lg text-purple-200 font-semibold">Print Title #{id}</h4>
              <p className="text-zinc-400">$25.00</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded text-white text-sm">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-zinc-500 text-sm py-8 border-t border-zinc-700">
        &copy; {new Date().getFullYear()} Rabbithole Entertainment. All rights reserved.
      </footer>
    </div>
  );
}
