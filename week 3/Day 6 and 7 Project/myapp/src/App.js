import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" id="home">
      <Navbar />

      <main>
        <section className="hero">
          <p className="eyebrow">WELCOME TO MY CORNER</p>
          <h1>Stories, ideas &amp; a little bit of <span>everything.</span></h1>
          <p className="hero-description">
            A personal space where I share what I learn, what inspires me,
            and the things I discover along the way.
          </p>
          <a href="#blogs" className="hero-button">
            Explore Articles ↓
          </a>
        </section>

        <BlogList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
