
import { useParams, Link } from "react-router-dom";

function PostDetails() {
  const { postId } = useParams();

  return (
    <section className="page">
      <p className="eyebrow">DYNAMIC ROUTE</p>
      <h1>Post Details</h1>

      <div className="info-card">
        <h2>Post ID: {postId}</h2>
        <p>
          This ID comes from the URL using the useParams() hook.
        </p>
      </div>

      <div className="post-links">
        <Link to="/post/101">Post 101</Link>
        <Link to="/post/202">Post 202</Link>
        <Link to="/post/303">Post 303</Link>
      </div>
    </section>
  );
}

export default PostDetails;
