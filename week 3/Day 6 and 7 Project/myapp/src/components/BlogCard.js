import { useState } from "react";

function BlogCard({ blog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="blog-card">
      <div className={`blog-cover ${blog.color}`}>
        <span className="cover-category">{blog.category}</span>
        <span className="cover-icon">{blog.icon}</span>
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <h2>{blog.title}</h2>
        <p className="blog-description">{blog.description}</p>

        {showDetails && (
          <p className="blog-details">{blog.details}</p>
        )}

        <button
          className="read-more"
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          {showDetails ? "Show Less ↑" : "Read More →"}
        </button>
      </div>
    </article>
  );
}

export default BlogCard;
