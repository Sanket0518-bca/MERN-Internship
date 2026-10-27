function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        <span className="brand-icon">B.</span>
        <span>My Personal Blog</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#blogs">Articles</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
