import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMore, setShowMore] = useState(false);

  function handleSubmit() {
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you! Your email has been submitted.");
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6">
      {/* Heading */}
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <p className="font-semibold text-secondary">
          WEEK 4 - DAY 4 PROJECT
        </p>

        <h1 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
          Tailwind CSS Practice
        </h1>

        <p className="mt-3 text-gray-600">
          Interactive Card and Custom Color Palette
        </p>

        {/* Task 2: Custom Colors */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-primary px-4 py-2 text-white">
            Primary
          </span>

          <span className="rounded-full bg-secondary px-4 py-2 text-white">
            Secondary
          </span>

          <span className="rounded-full bg-accent px-4 py-2 text-white">
            Accent
          </span>
        </div>
      </header>

      {/* Task 1: Interactive Card */}
      <main className="mx-auto max-w-sm">
        <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-3xl text-white">
            ⚛️
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            React Training
          </h2>

          <p className="mt-2 leading-6 text-gray-600">
            Learn React with hands-on examples and real projects.
          </p>

          <label
            htmlFor="email"
            className="mt-5 block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
          />

          <button
            onClick={handleSubmit}
            className="mt-4 w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Submit Email
          </button>

          {message && (
            <p
              aria-live="polite"
              className={`mt-3 text-sm ${
                message.startsWith("Thank")
                  ? "text-green-700"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 font-semibold text-secondary transition hover:text-purple-800"
          >
            {showMore ? "Show Less ↑" : "Read More →"}
          </button>

          {showMore && (
            <p className="mt-3 rounded-lg bg-background p-3 text-sm leading-6 text-gray-600">
              Practice React components, input fields, state and Tailwind CSS
              utility classes to create modern user interfaces.
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2026 Week 4 Day 4 | Built with React and Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
