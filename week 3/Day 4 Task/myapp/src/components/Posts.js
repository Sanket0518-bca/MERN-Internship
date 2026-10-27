import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch posts. Please try again.');
        }

        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <h2>Latest Posts</h2>
        <div className="status">
          <span className="spinner"></span>
          <p>Fetching posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <h2>Latest Posts</h2>
        <p className="error-message">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="section">
      <h2>Latest Posts</h2>
      <p className="section-description">
        Showing the first {posts.length} posts from the API.
      </p>

      <div className="post-list">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <span className="post-number">POST {post.id}</span>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Posts;
