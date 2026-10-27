
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cards = [
    {
      title: "React",
      description: "Build interactive user interfaces with React.",
      icon: "⚛️",
    },
    {
      title: "Tailwind CSS",
      description: "Design beautiful websites using utility classes.",
      icon: "🎨",
    },
    {
      title: "JavaScript",
      description: "Add functionality to your web applications.",
      icon: "💛",
    },
    {
      title: "HTML & CSS",
      description: "Create the structure and style of web pages.",
      icon: "🌐",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Task 2: Responsive Navbar */}
      <nav className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">
          My<span className="text-cyan-400">Website</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a href="#home" className="hover:text-cyan-400">Home</a>
          </li>
          <li>
            <a href="#cards" className="hover:text-cyan-400">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded px-3 py-1 text-2xl hover:bg-gray-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute left-0 top-[64px] z-10 flex w-full flex-col gap-4 bg-gray-900 p-6 md:hidden">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#cards" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="bg-blue-600 px-5 py-12 text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Welcome to My Website
        </h2>
        <p className="mt-3">
          Learn React and Tailwind CSS with simple examples.
        </p>
        <a
          href="#cards"
          className="mt-5 inline-block rounded-lg bg-white px-5 py-2 font-semibold text-blue-600 transition hover:bg-gray-200"
        >
          Explore More
        </a>
      </header>

      {/* Task 3: Responsive Cards */}
      <main id="cards" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">{card.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                {card.title}
              </h3>
              <p className="mt-3 text-gray-600">{card.description}</p>
              <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Task 1: Tailwind Button */}
        <section id="about" className="mt-10 rounded-xl bg-white p-6 text-center shadow">
          <h2 className="text-2xl font-bold text-gray-800">
            About This Project
          </h2>
          <p className="mt-3 text-gray-600">
            This project uses Tailwind classes for buttons, cards, spacing,
            colors, responsive layouts and hover effects.
          </p>
          <button className="mt-5 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
            Click Me
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 px-4 py-5 text-center text-white">
        <p>© 2026 MyWebsite | Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
