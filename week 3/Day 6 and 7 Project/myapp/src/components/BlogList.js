import { useState } from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "My Journey into Web Development",
    category: "Development",
    date: "Oct 10, 2026",
    readTime: "5 min read",
    icon: "💻",
    color: "cover-blue",
    description:
      "Every developer starts somewhere. Here is how I started learning HTML, CSS and React.",
    details:
      "I began with simple web pages and gradually learned components, props and state. Practicing small projects every day helped me understand how websites work.",
  },
  {
    id: 2,
    title: "5 Habits for Better Productivity",
    category: "Lifestyle",
    date: "Oct 08, 2026",
    readTime: "4 min read",
    icon: "🌱",
    color: "cover-green",
    description:
      "Small daily habits can make a big difference in how you learn, work and grow.",
    details:
      "Plan your day, focus on one task at a time, take short breaks, avoid distractions and review your progress at the end of the day.",
  },
  {
    id: 3,
    title: "Why I Love Creative Design",
    category: "Creativity",
    date: "Oct 05, 2026",
    readTime: "6 min read",
    icon: "🎨",
    color: "cover-purple",
    description:
      "Good design is more than colors. It helps people understand and enjoy a product.",
    details:
      "I like combining simple layouts, readable typography and balanced colors. The best design makes an interface attractive without making it confusing.",
  },
  {
    id: 4,
    title: "My Favorite Coding Resources",
    category: "Learning",
    date: "Oct 02, 2026",
    readTime: "3 min read",
    icon: "📚",
    color: "cover-orange",
    description:
      "A few useful resources that make learning programming easier and more enjoyable.",
    details:
      "Documentation, beginner-friendly tutorials and hands-on coding challenges are great places to start. Build small projects to practice each new concept.",
  },
  {
    id: 5,
    title: "Building Projects with React",
    category: "Development",
    date: "Sep 28, 2026",
    readTime: "7 min read",
    icon: "⚛️",
    color: "cover-pink",
    description:
      "Learn why components and reusable UI make React projects easier to maintain.",
    details:
      "Break your interface into small components. Pass data through props, manage changing values with state, and use map to render repeated elements.",
  },
  {
    id: 6,
    title: "Learning Something New Every Day",
    category: "Personal Growth",
    date: "Sep 24, 2026",
    readTime: "4 min read",
    icon: "✨",
    color: "cover-teal",
    description:
      "You do not need to learn everything in one day. Consistent practice is the key.",
    details:
      "Choose one small goal, practice it, write down what you learned and revisit difficult topics. Progress comes from showing up regularly.",
  },
];

function BlogList() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const searchText = search.toLowerCase();

    return (
      blog.title.toLowerCase().includes(searchText) ||
      blog.category.toLowerCase().includes(searchText) ||
      blog.description.toLowerCase().includes(searchText)
    );
  });

  return (
    <section className="blog-section" id="blogs">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE BLOG</p>
          <h2>Latest Articles</h2>
          <p className="section-subtitle">
            Thoughts, stories and ideas from my little corner of the internet.
          </p>
        </div>

        <div className="article-count">
          {filteredBlogs.length} articles
        </div>
      </div>

      <div className="search-box">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search articles or categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search blog articles"
        />
        {search && (
          <button
            className="clear-search"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {filteredBlogs.length > 0 ? (
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>🔎</span>
          <h3>No articles found</h3>
          <p>Try another search term.</p>
          <button className="reset-button" onClick={() => setSearch("")}>
            Show all articles
          </button>
        </div>
      )}
    </section>
  );
}

export default BlogList;
